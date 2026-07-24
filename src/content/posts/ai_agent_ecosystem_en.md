---
title: AI Agent Ecosystem (2026) — EN
group: AI+HOMELAB
category: AI Agents
---

## The AI Agent Ecosystem (2026)

*[한국어로 보기 →](/ai_agent_ecosystem/)*

The AI agent ecosystem has evolved rapidly in just a few years.

In the early days, it was little more than sending a question to an LLM and getting an answer back. Today, agents use tools, integrate with external systems, and carry out long-running tasks on their own.

---

## Table of Contents

* [Timeline of the AI Agent Ecosystem](#timeline-of-the-ai-agent-ecosystem)
* [The Current AI Agent Ecosystem](#the-current-ai-agent-ecosystem)
* [1. Model](#1-model)
* [2. LLM APIs and Ollama](#2-llm-apis-and-ollama)
* [3. Tool](#3-tool)
* [4. MCP](#4-mcp)
* [5. Skill](#5-skill)
* [6. Harness (Agent Runtime)](#6-harness-agent-runtime)
* [7. Agent (Three Meanings)](#7-agent-three-meanings)
* [8. Agent SDK](#8-agent-sdk)
* [9. Multi-Agent vs. Agent SDK](#9-multi-agent-vs-agent-sdk)
* [10. Using Claude Code and Codex Together](#10-using-claude-code-and-codex-together)
* [11. OpenClaw and Hermes](#11-openclaw-and-hermes)
* [Summary](#summary)

---

## Timeline of the AI Agent Ecosystem

### 2023: LLMs Enter the Picture

The earliest structure was extremely simple.

```text
Prompt
   │
   ▼
 LLM
   │
   ▼
Response
```

The key terms of this era were Prompt Engineering, RAG, Vector Databases, and Memory.

The dominant frameworks were LangChain, LlamaIndex, and Semantic Kernel.

---

### 2024: The Tool-Calling Era

LLMs went beyond generating answers and started calling the functions they needed.

```text
           User
             │
             ▼
            LLM
      ┌──────┼──────┐
      ▼      ▼      ▼
 read_file web_search run_python
```

LLMs could now read files, search the web, or run code depending on the situation.

This is when the concept of an "agent" really started to take hold.

---

### Late 2024: The Workflow Era

Once tools could be called, the order in which they were used started to matter.

```text
Search
 │
 ▼
Summarize
 │
 ▼
Verify
 │
 ▼
Search again
 │
 ▼
Final answer
```

This is when LangGraph began to grow quickly.

---

### 2025: The Coding Agent Era

Agents started to understand and modify entire repositories.

```text
Repository
     │
     ▼
   Agent
     │
     ▼
   Read
     │
     ▼
   Edit
     │
     ▼
   Test
     │
     ▼
   Diff
     │
     ▼
  Commit
```

Well-known coding agents from this era include Claude Code, Codex CLI, and OpenHands.

The harness mattered more than the prompt during this period.

---

### Late 2025: Long-Horizon Agents

Agents began carrying out a single task on their own for tens of minutes or even hours.

```text
Start task
     │
     ▼
Write code
     │
     ▼
Run tests
     │
     ▼
Passed? ──(No)──► Auto-fix → Retest (repeat until it passes)
     │
   (Yes)
     │
     ▼
Create PR
```

If a test fails, the agent fixes the code automatically, retests, and repeats until it passes.

Agents could now repeat several steps in a row without a human stepping in.

---

### 2026: The Agent SDK Era

Frameworks like LangChain and AutoGen used to be the center of gravity.

Now that model companies are shipping official Agent SDKs, building an agent is becoming more standardized.

Well-known Agent SDKs include the OpenAI Agents SDK and Google's ADK.

---

## The Current AI Agent Ecosystem

The current structure can be understood as follows.

```text
Application
      │
      ▼
Agent (Harness)
      │
      ▼
Tool / MCP / Skill
      │
      ▼
LLM API / Ollama
      │
      ▼
Model
```

Let's walk through each layer.

---

## 1. Model

At the very bottom sits the actual language model.

Well-known models include GPT, Claude, Gemini, Qwen, Llama, and Gemma.

A model's only job is to understand natural language and generate a response.

---

## 2. LLM APIs and Ollama

There are two main ways to use a model.

### Cloud API

```text
My program
      │
      ▼
 OpenAI API
 Claude API
 Gemini API
```

This is the most common way to build a service. The model runs in the cloud, accessed through an API.

---

### Ollama

```text
My program
      │
      ▼
    Ollama
      │
      ▼
Gemma / Qwen / Llama
```

This is still an API, but the model runs on a local machine.

In other words, Ollama is a local LLM server, not a harness.

---

## 3. Tool

A tool is a function an agent actually executes.

Common tools include `read_file()`, `write_file()`, `git_commit()`, `shell()`, `browser()`, and `oracle_query()`.

An LLM never edits a file directly — it calls a tool to get the work done.

---

## 4. MCP

MCP (Model Context Protocol) is a protocol for standardizing tools.

Well-known MCP servers include GitHub MCP, Slack MCP, Notion MCP, and PostgreSQL MCP, and you can implement your own MCP server if you need to.

```text
   Agent
     │
     ▼
    MCP
 ┌───┼───┬──────────┐
 ▼   ▼   ▼          ▼
GitHub Slack Notion PostgreSQL
```

MCP is neither an LLM nor an agent — it simply exposes functionality to the outside world.

---

## 5. Skill

A skill is a reference manual an agent consults.

It's usually written in Markdown, laid out as a directory like this:

```text
skills/
└── git/
    └── SKILL.md
```

Inside `SKILL.md` you write the steps and rules for the task, for example:

```text
How to update a submodule

1.
2.
3.
```

---

## 6. Harness (Agent Runtime)

A harness is the program that connects an LLM to its tools.

It asks the LLM to call a tool,

feeds the result back in,

and repeats the process of deciding the next action.

The simplest form looks like this:

```python
while True:
    response = llm(messages)

    if response.tool_call:
        result = tool(...)
        messages.append(result)
    else:
        break
```

Well-known harnesses include Claude Code, Codex CLI, OpenHands, OpenClaw, and Hermes.

---

## 7. Agent (Three Meanings)

The word "agent" is used with three different meanings depending on context.

### Agent Runtime

This is the most common meaning: Claude Code, Codex CLI, OpenHands, OpenClaw, Hermes, and the like.

---

### Multi-Agent

This is the structure used by AutoGen, CrewAI, and LangGraph.

```text
      Manager
         │
   ┌─────┼─────┐
   ▼     ▼     ▼
Research Coding Review
```

Role-specific agents — Research, Coding, Review — are created to collaborate with each other.

Each agent has its own prompt, tools, and memory.

---

### Claude Code Sub-Agent

Claude Code lets you define expert roles in Markdown.

```text
.claude/
└── agents/
    ├── python.md
    ├── git.md
    └── docker.md
```

You could define a Python expert, a Git expert, a Docker expert, and so on.

A sub-agent isn't a new LLM — it's a config file that defines an expert role.

---

## 8. Agent SDK

Model companies have recently started offering official Agent SDKs.

An Agent SDK lets you build an agent in code with very little effort.

```python
agent = Agent(
    model=model,
    tools=[
        search_tool,
        git_tool,
        db_tool,
    ],
)
```

Well-known examples include the OpenAI Agents SDK and Google's ADK.

---

## 9. Multi-Agent vs. Agent SDK

### Multi-Agent

```text
      Manager
         │
   ┌─────┼─────┐
   ▼     ▼     ▼
Research Coding Review
```

Multiple agents collaborate with one another.

---

### Agent SDK

```text
User
 │
 ▼
Agent
 │
 ├── Tool
 ├── Tool
 ├── Tool
 └── Answer
```

There's a single agent that picks whichever tools it needs to get the job done.

---

## 10. Using Claude Code and Codex Together

If you use both Claude Code and Codex, you can set one up to run the other.

```text
Claude Code
      │
      ▼
codex run ...
      │
      ▼
Return result
      │
      ▼
Claude reviews it
```

In this setup, Codex effectively behaves like just another tool.

---

## 11. OpenClaw and Hermes

OpenClaw and Hermes aren't LLMs — they're harnesses.

```text
OpenClaw
      │
 ┌────┼────┬────┐
 ▼    ▼    ▼    ▼
GPT Claude Gemini Ollama
```

They manage multiple models so they can all be used within a single agent environment.

---

## Summary

- A **Model** understands language and generates answers.
- An **LLM API / Ollama** makes a model available to use.
- A **Tool** carries out the actual work.
- **MCP** standardizes tools.
- A **Skill** explains how to do a task.
- A **Harness** connects an LLM to its tools.
- **Agent** is used with three meanings depending on context: Agent Runtime, Multi-Agent, and Sub-Agent.
- An **Agent SDK** is a library that makes it easy to build a harness.
