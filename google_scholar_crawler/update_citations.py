"""Refresh the public citation snapshot; failed fetches never overwrite good data."""
import argparse
from datetime import datetime, timezone, timedelta
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import sys
from urllib.request import Request, urlopen

PROFILE = "https://scholar.google.com/citations?user=ujHiil8AAAAJ"
ROOT = Path(__file__).resolve().parents[1]


class ScholarParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.name = []
        self.metrics = []
        self.table_text = []
        self.cell = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in {"meta", "link", "img", "input", "br", "hr", "source", "wbr"}:
            return
        self.stack.append((tag, attrs))
        in_stats = any(a.get("id") == "gsc_rsb_st" for _, a in self.stack)
        if tag == "td" and in_stats and "gsc_rsb_std" in attrs.get("class", "").split():
            self.cell = []

    def handle_data(self, text):
        if any(a.get("id") == "gsc_prf_in" for _, a in self.stack):
            self.name.append(text)
        if any(a.get("id") == "gsc_rsb_st" for _, a in self.stack):
            self.table_text.append(text)
        if self.cell is not None:
            self.cell.append(text)

    def handle_endtag(self, tag):
        if tag == "td" and self.cell is not None:
            self.metrics.append("".join(self.cell))
            self.cell = None
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                del self.stack[i:]
                break


def parse_citations(html):
    parser = ScholarParser()
    parser.feed(html)
    name = " ".join("".join(parser.name).split())
    if name != "Ye Fang":
        raise ValueError("Expected Ye Fang's Scholar profile; received a different page")
    if "Citations" not in " ".join(parser.table_text) or not parser.metrics:
        raise ValueError("The Scholar citations table is missing")
    # First numeric cell is All citations, not Since-year citations or h-index.
    value = re.sub(r"[,\s\u00a0\u202f]", "", parser.metrics[0])
    if not re.fullmatch(r"\d+", value):
        raise ValueError("The total citation count is not an integer")
    return int(value)


def refresh(html=None, root=ROOT):
    if html is None:
        request = Request(PROFILE + "&hl=en", headers={"User-Agent": "Mozilla/5.0", "Accept-Language": "en"})
        with urlopen(request, timeout=25) as response:
            html = response.read().decode("utf-8")
    total = parse_citations(html)
    now = datetime.now(timezone.utc)
    snapshot = {
        "total_citations": total,
        "checked_on": now.astimezone(timezone(timedelta(hours=8))).date().isoformat(),
        "fetched_at": now.isoformat(timespec="seconds"),
        "profile": PROFILE,
        "source": "Google Scholar profile, all-time Citations",
    }
    content = json.dumps(snapshot, indent=2) + "\n"
    # Validate before touching either file. Replace complete files atomically.
    for relative in ("_data/scholar.json", "assets/data/scholar.json"):
        target = root / relative
        target.parent.mkdir(parents=True, exist_ok=True)
        temporary = target.with_suffix(".json.tmp")
        temporary.write_text(content, encoding="utf-8")
        temporary.replace(target)
    return snapshot


if __name__ == "__main__":
    cli = argparse.ArgumentParser(description=__doc__)
    cli.add_argument("--html", type=Path, help="Read a saved Scholar response for local verification")
    args = cli.parse_args()
    try:
        result = refresh(args.html.read_text(encoding="utf-8") if args.html else None)
    except Exception as error:
        print(f"Scholar refresh failed; keeping the last valid snapshot: {error}", file=sys.stderr)
        raise SystemExit(1)
    print(f"Google Scholar: {result['total_citations']} total citations; checked {result['checked_on']}")
