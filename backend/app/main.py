import os
from datetime import datetime, timezone
from typing import List

from bson import ObjectId
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, EmailStr, Field


MONGO_URI = os.getenv("MONGO_URI", "mongodb://mongo:27017")
MONGO_DB = os.getenv("MONGO_DB", "aether_ai")
ALLOWED_ORIGINS = [origin.strip() for origin in os.getenv("ALLOWED_ORIGINS", "*").split(",")]

app = FastAPI(title="Aether AI Content API", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = AsyncIOMotorClient(MONGO_URI)
db = client[MONGO_DB]


class BlogSection(BaseModel):
    heading: str
    body: str


class BlogPost(BaseModel):
    slug: str
    title: str
    category: str
    readTime: str
    desc: str
    sections: List[BlogSection]
    published: bool = True


class Inquiry(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    projectType: str = Field(min_length=2, max_length=160)
    message: str = Field(min_length=10, max_length=4000)


SEED_POSTS = [
    {
        "slug": "ai-agents-erp-operations",
        "title": "How AI Agents Improve Daily ERP Operations",
        "category": "ERP Automation",
        "readTime": "5 min read",
        "desc": "A practical guide to using supervised AI agents for orders, invoices, inventory checks, approvals, and support workflows.",
        "sections": [
            {
                "heading": "Start with the work people repeat every day",
                "body": "The best ERP automation opportunities are usually hiding in plain sight: checking order status, matching invoices, following up on approvals, creating support notes, updating records, and preparing daily reports. AI agents help when those tasks require context, judgment, and system access rather than simple one-step automation.",
            },
            {
                "heading": "Keep people in control",
                "body": "For business use, agents should not behave like unmanaged bots. They should draft, recommend, validate, and execute only inside clear rules. High-risk actions such as vendor payments, credit notes, stock adjustments, or customer commitments should include approval flows, audit logs, and role-based permissions.",
            },
            {
                "heading": "Connect agents to measurable outcomes",
                "body": "A useful ERP agent reduces manual effort, improves response time, increases data accuracy, or gives managers better visibility. Start with one workflow, define the target metric, then expand once teams trust the result.",
            },
        ],
        "published": True,
    },
    {
        "slug": "rag-assistant-business-readiness",
        "title": "What Business Leaders Should Know Before Building a RAG Assistant",
        "category": "Knowledge Systems",
        "readTime": "6 min read",
        "desc": "How to prepare documents, permissions, citations, and review flows before launching an internal knowledge assistant.",
        "sections": [
            {
                "heading": "A knowledge assistant is only as strong as its source material",
                "body": "Before building, organize the documents your team actually relies on: policies, SOPs, product sheets, support history, contracts, manuals, and training notes. Remove outdated files, identify owners, and decide which teams can access which information.",
            },
            {
                "heading": "Citations build confidence",
                "body": "Business users need to know where an answer came from. A strong RAG assistant should show sources, respect permissions, and make it easy to open the original document. This is especially important for finance, HR, compliance, support, and ERP process guidance.",
            },
            {
                "heading": "Plan for review and improvement",
                "body": "The first release should include feedback capture, answer review, and a process for updating content. Treat the assistant as an operational system, not a one-time chatbot.",
            },
        ],
        "published": True,
    },
    {
        "slug": "real-time-operational-intelligence",
        "title": "From Manual Reports to Real-Time Operational Intelligence",
        "category": "Business Intelligence",
        "readTime": "4 min read",
        "desc": "Ways to turn ERP, POS, CRM, and support data into dashboards, alerts, and decisions your team can use every day.",
        "sections": [
            {
                "heading": "Move from reports to signals",
                "body": "Traditional reporting often tells leaders what happened too late. Operational intelligence turns business data into timely signals: stock risk, delayed purchase orders, unusual sales drops, high support volume, late invoices, or slow approvals.",
            },
            {
                "heading": "Bring systems into one view",
                "body": "Most teams work across ERP, POS, CRM, e-commerce, spreadsheets, and support tools. A useful dashboard brings the right data together and explains what needs attention, not just what changed.",
            },
            {
                "heading": "Make insights actionable",
                "body": "The strongest systems let users move from insight to action: send a reminder, open an ERP record, assign a task, escalate a ticket, or ask an assistant for the next best step.",
            },
        ],
        "published": True,
    },
]


def serialize(document):
    document["_id"] = str(document["_id"])
    return document


@app.on_event("startup")
async def startup():
    await db.blogs.create_index("slug", unique=True)
    await db.inquiries.create_index("createdAt")
    if await db.blogs.count_documents({}) == 0:
        now = datetime.now(timezone.utc)
        await db.blogs.insert_many([{**post, "createdAt": now, "updatedAt": now} for post in SEED_POSTS])


@app.get("/api/health")
async def health():
    await db.command("ping")
    return {"status": "ok"}


@app.get("/api/blogs")
async def get_blogs():
    cursor = db.blogs.find({"published": True}, {"_id": 0}).sort("createdAt", 1)
    return [post async for post in cursor]


@app.get("/api/blogs/{slug}")
async def get_blog(slug: str):
    post = await db.blogs.find_one({"slug": slug, "published": True}, {"_id": 0})
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return post


@app.post("/api/blogs", response_model=BlogPost)
async def create_blog(post: BlogPost):
    now = datetime.now(timezone.utc)
    payload = post.model_dump()
    payload.update({"createdAt": now, "updatedAt": now})
    try:
        await db.blogs.insert_one(payload)
    except Exception as exc:
        raise HTTPException(status_code=400, detail="Blog slug already exists or payload is invalid") from exc
    return post


@app.post("/api/inquiries")
async def create_inquiry(inquiry: Inquiry):
    payload = inquiry.model_dump()
    payload["createdAt"] = datetime.now(timezone.utc)
    result = await db.inquiries.insert_one(payload)
    return {"id": str(result.inserted_id), "status": "saved"}


@app.get("/api/inquiries")
async def get_inquiries():
    cursor = db.inquiries.find().sort("createdAt", -1)
    return [serialize(inquiry) async for inquiry in cursor]
