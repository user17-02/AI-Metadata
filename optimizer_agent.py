import os
import requests
import json
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
FEATHERLESS_API_KEY = os.getenv("FEATHERLESS_API_KEY")

# ----------------------------
# Featherless API Configuration
# ----------------------------
FEATHERLESS_API_URL = "https://api.featherless.ai/v1/chat/completions"
MODEL_NAME = "Sao10K/Fimbulvetr-11B-v2"

HEADERS = {
    "Authorization": f"Bearer {FEATHERLESS_API_KEY}",
    "Content-Type": "application/json",
}

# ----------------------------
# Core Function
# ----------------------------
def generate_metadata(content: str) -> dict:
    """
    Generate optimized KDP metadata (title, subtitle, keywords, categories, description)
    using Featherless API.
    """

    prompt = f"""
    You are an expert Amazon KDP metadata optimizer.

    Analyze the following book content or description:
    ---
    {content}
    ---

    Generate a strict JSON object only, with no extra text:
    {{
      "title": "...",
      "subtitle": "...",
      "keywords": ["...", "...", "..."],
      "categories": ["..."],
      "description": "..."
    }}

    Notes:
    - Keep it concise, SEO-rich, and human-readable.
    - Ensure valid JSON formatting only (no explanations, no comments).
    """

    payload = {
        "model": MODEL_NAME,
        "messages": [
            {"role": "system", "content": "You are an AI metadata optimizer for Kindle Direct Publishing (KDP)."},
            {"role": "user", "content": prompt},
        ],
        "temperature": 0.6,
        "max_tokens": 800,
    }

    try:
        response = requests.post(FEATHERLESS_API_URL, headers=HEADERS, json=payload)
        response.raise_for_status()

        data = response.json()

        # Extract message content
        raw_text = data["choices"][0]["message"]["content"].strip()

        # Attempt to parse as JSON
        try:
            result = json.loads(raw_text)
        except json.JSONDecodeError:
            # Try to clean and fix JSON issues if any minor formatting errors occur
            cleaned = raw_text.strip().split("```json")[-1].split("```")[0]
            result = json.loads(cleaned)

        return result

    except requests.exceptions.RequestException as e:
        raise Exception(f"❌ Featherless API Error: {e}")
    except Exception as e:
        raise Exception(f"❌ Invalid JSON or parsing error: {e}")
