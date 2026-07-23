---
title: AI Agent Ecosystem (2026)
group: AI+HOMELAB
category: AI Agents
---

## AI Agent 생태계 정리 (2026)

AI Agent 생태계는 불과 몇 년 사이에 빠르게 발전했다.

초기에는 단순히 LLM에게 질문을 보내고 답변을 받는 수준이었다면, 현재는 Tool을 사용하고, 외부 시스템과 연동하며, 장시간 작업을 수행하는 Agent 형태가 일반적이다.

---

## 목차

* [AI Agent 생태계 타임라인](#ai-agent-생태계-타임라인)
* [현재 AI Agent 생태계](#현재-ai-agent-생태계)
* [1. Model](#1-model)
* [2. LLM API와 Ollama](#2-llm-api와-ollama)
* [3. Tool](#3-tool)
* [4. MCP](#4-mcp)
* [5. Skill](#5-skill)
* [6. Harness (Agent Runtime)](#6-harness-agent-runtime)
* [7. Agent (세 가지 의미)](#7-agent-세-가지-의미)
* [8. Agent SDK](#8-agent-sdk)
* [9. Multi-Agent와 Agent SDK의 차이](#9-multi-agent와-agent-sdk의-차이)
* [10. Claude Code와 Codex 함께 사용하기](#10-claude-code와-codex-함께-사용하기)
* [11. OpenClaw와 Hermes](#11-openclaw와-hermes)
* [한 줄 요약](#한-줄-요약)

---

## AI Agent 생태계 타임라인

### 2023 : LLM 활용 시작

초기의 구조는 매우 단순했다.

```text
Prompt
   │
   ▼
 LLM
   │
   ▼
Response
```

이 시기의 핵심 키워드는 Prompt Engineering, RAG, Vector Database, Memory였다.

대표적인 프레임워크로는 LangChain, LlamaIndex, Semantic Kernel 등이 사용되었다.

---

### 2024 : Tool Calling 시대

LLM이 단순히 답변을 생성하는 것을 넘어 필요한 기능을 직접 호출하기 시작했다.

```text
           User
             │
             ▼
            LLM
      ┌──────┼──────┐
      ▼      ▼      ▼
 read_file web_search run_python
```

LLM은 상황에 따라 파일을 읽고, 웹을 검색하고, 코드를 실행할 수 있게 되었다.

이 시기부터 Agent라는 개념이 본격적으로 등장하기 시작했다.

---

### 2024 후반 : Workflow 시대

Tool을 사용할 수 있게 되자 어떤 Tool을 어떤 순서로 사용할지가 중요해졌다.

```text
검색
 │
 ▼
요약
 │
 ▼
검증
 │
 ▼
추가 검색
 │
 ▼
최종 답변
```

이 시기부터 LangGraph가 빠르게 성장하기 시작했다.

---

### 2025 : Coding Agent 시대

Agent가 Repository 전체를 이해하고 수정하기 시작했다.

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

대표적인 Coding Agent로는 Claude Code, Codex CLI, OpenHands 등이 있다.

Prompt보다 Harness의 역할이 더욱 중요해진 시기이다.

---

### 2025 후반 : Long Horizon Agent

Agent가 수십 분 또는 몇 시간 동안 하나의 작업을 스스로 수행하기 시작했다.

```text
작업 시작
     │
     ▼
코드 작성
     │
     ▼
테스트 실행
     │
     ▼
   성공? ──(아니오)──► 자동 수정 → 다시 테스트 (성공할 때까지 반복)
     │
    (예)
     │
     ▼
  PR 생성
```

테스트가 실패하면 자동으로 수정 후 다시 테스트하고, 통과할 때까지 이 과정을 반복한다.

사람이 중간에 개입하지 않아도 여러 단계를 반복 수행할 수 있게 되었다.

---

### 2026 : Agent SDK 시대

이전에는 LangChain, AutoGen 같은 프레임워크가 중심이었다.

현재는 모델 회사들이 공식 Agent SDK를 제공하기 시작하면서 Agent 개발 방식이 점점 표준화되고 있다.

대표적인 Agent SDK로는 OpenAI Agents SDK와 Google ADK 등이 있다.

---

## 현재 AI Agent 생태계

현재의 구조는 다음과 같이 이해하면 된다.

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

이제 각 계층을 하나씩 살펴보자.

---

## 1. Model

가장 아래에는 실제 언어 모델이 있다.

대표적인 모델로는 GPT, Claude, Gemini, Qwen, Llama, Gemma 등이 있다.

Model은 자연어를 이해하고 답변을 생성하는 역할만 수행한다.

---

## 2. LLM API와 Ollama

Model을 사용하는 방법은 크게 두 가지이다.

### Cloud API

```text
내 프로그램
      │
      ▼
 OpenAI API
 Claude API
 Gemini API
```

서비스를 만들 때 가장 일반적으로 사용하는 방식이다.

모델은 클라우드에서 실행되며 API를 통해 접근한다.

---

### Ollama

```text
내 프로그램
      │
      ▼
    Ollama
      │
      ▼
Gemma / Qwen / Llama
```

동일하게 API 형태지만 모델이 로컬 PC에서 실행된다.

즉, Ollama는 로컬 LLM 서버이지 Harness는 아니다.

---

## 3. Tool

Tool은 Agent가 실제로 실행하는 기능이다.

대표적인 Tool로는 `read_file()`, `write_file()`, `git_commit()`, `shell()`, `browser()`, `oracle_query()` 등이 있다.

LLM은 직접 파일을 수정하지 않고 Tool을 호출하여 작업을 수행한다.

---

## 4. MCP

MCP(Model Context Protocol)는 Tool을 표준화하기 위한 프로토콜이다.

대표적인 MCP 서버로는 GitHub MCP, Slack MCP, Notion MCP, PostgreSQL MCP 등이 있으며, 필요하다면 직접 MCP Server를 구현할 수도 있다.

```text
   Agent
     │
     ▼
    MCP
 ┌───┼───┬──────────┐
 ▼   ▼   ▼          ▼
GitHub Slack Notion PostgreSQL
```

MCP는 LLM이 아니며, Agent도 아니다.

단순히 기능을 외부에 제공하는 역할을 한다.

---

## 5. Skill

Skill은 Agent가 참고하는 작업 매뉴얼이다.

일반적으로 Markdown으로 작성한다.

예를 들어 아래처럼 디렉터리 구조로 구성한다.

```text
skills/
└── git/
    └── SKILL.md
```

`SKILL.md` 안에는

```text
Submodule 수정 방법

1.
2.
3.
```

처럼 작업 절차와 규칙을 작성한다.

---

## 6. Harness (Agent Runtime)

Harness는 LLM과 Tool을 연결하는 프로그램이다.

LLM에게 Tool을 호출하게 하고,

실행 결과를 다시 전달한 뒤,

다음 행동을 결정하는 과정을 반복한다.

가장 단순한 형태는 다음과 같다.

```python
while True:
    response = llm(messages)

    if response.tool_call:
        result = tool(...)
        messages.append(result)
    else:
        break
```

대표적인 Harness로는 Claude Code, Codex CLI, OpenHands, OpenClaw, Hermes 등이 있다.

---

## 7. Agent (세 가지 의미)

Agent라는 단어는 문맥에 따라 세 가지 의미로 사용된다.

### Agent Runtime

가장 일반적인 의미이다.

Claude Code, Codex CLI, OpenHands, OpenClaw, Hermes 등을 말한다.

---

### Multi-Agent

AutoGen, CrewAI, LangGraph 등에서 사용하는 구조이다.

```text
      Manager
         │
   ┌─────┼─────┐
   ▼     ▼     ▼
Research Coding Review
```

Research, Coding, Review처럼 역할별 Agent를 만들어 협업하는 방식이다.

각 Agent는 자신만의 Prompt, Tool, Memory를 가진다.

---

### Claude Code Sub-Agent

Claude Code에서는 전문가 역할을 Markdown으로 정의할 수 있다.

```text
.claude/
└── agents/
    ├── python.md
    ├── git.md
    └── docker.md
```

예를 들어 Python 전문가, Git 전문가, Docker 전문가 등을 정의할 수 있다.

Sub-Agent는 새로운 LLM이 아니라 전문가 역할을 정의하는 설정 파일이다.

---

## 8. Agent SDK

최근에는 모델 회사들이 Agent SDK를 공식 제공하고 있다.

Agent SDK를 사용하면 Agent를 코드로 쉽게 생성할 수 있다.

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

대표적으로 OpenAI Agents SDK와 Google ADK 등이 있다.

---

## 9. Multi-Agent와 Agent SDK의 차이

### Multi-Agent

```text
      Manager
         │
   ┌─────┼─────┐
   ▼     ▼     ▼
Research Coding Review
```

여러 Agent가 서로 협업하는 구조이다.

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

Agent는 하나이며 필요한 Tool만 선택하여 작업을 수행한다.

---

## 10. Claude Code와 Codex 함께 사용하기

Claude Code와 Codex를 모두 사용하는 경우 한쪽이 다른 쪽을 실행하도록 구성할 수도 있다.

```text
Claude Code
      │
      ▼
codex run ...
      │
      ▼
결과 반환
      │
      ▼
Claude가 검토
```

이 경우 Codex는 하나의 Tool처럼 동작한다.

---

## 11. OpenClaw와 Hermes

OpenClaw와 Hermes는 LLM이 아니라 Harness이다.

```text
OpenClaw
      │
 ┌────┼────┬────┐
 ▼    ▼    ▼    ▼
GPT Claude Gemini Ollama
```

여러 모델을 하나의 Agent 환경에서 사용할 수 있도록 관리하는 역할을 한다.

---

## 한 줄 요약

- **Model**은 언어를 이해하고 답변을 생성한다.
- **LLM API / Ollama**는 Model을 사용할 수 있도록 제공한다.
- **Tool**은 실제 작업을 수행한다.
- **MCP**는 Tool을 표준화한다.
- **Skill**은 작업 방법을 설명한다.
- **Harness**는 LLM과 Tool을 연결한다.
- **Agent**는 문맥에 따라 Agent Runtime, Multi-Agent, Sub-Agent 세 가지 의미로 쓰인다.
- **Agent SDK**는 Harness를 쉽게 구현할 수 있도록 도와주는 라이브러리이다.
