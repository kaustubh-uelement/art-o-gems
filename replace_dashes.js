const fs = require('fs');

const replacements = {
    "AGENTS.md": [
        ["Agent instructions — Art", "Agent instructions - Art"],
        ["raster images — every painting", "raster images: every painting"],
        ["table — always convert", "table; always convert"],
        ["component libraries — this is", "component libraries: this is"]
    ],
    "app/art/page.tsx": [
        ["Art — Kalos", "Art - Kalos"],
        ["ladder — by the artist, attributed to, studio of, after — and we use", "ladder (by the artist, attributed to, studio of, after) and we use"]
    ],
    "app/auctions/page.tsx": [["Auctions — Kalos", "Auctions - Kalos"]],
    "app/bidding/page.tsx": [
        ["How to bid — Kalos", "How to bid - Kalos"],
        ["allow — leaving", "allow; leaving"],
        ["increments — Indian", "increments - Indian"],
        ["2609 — September", "2609: September"]
    ],
    "app/exhibitions/page.tsx": [["Exhibitions — Kalos", "Exhibitions - Kalos"]],
    "app/jewels/page.tsx": [
        ["Stones — Kalos", "Stones - Kalos"],
        ["description — not in a", "description, not in a"]
    ],
    "app/layout.tsx": [
        ["Kagathos — Gallery", "Kagathos - Gallery"]
    ],
    "app/lot/[no]/page.tsx": [
        ["title} — Kalos", "title} - Kalos"]
    ],
    "app/not-found.tsx": [
        ["Found — Kalos", "Found - Kalos"]
    ],
    "app/page.tsx": [
        ["Kagathos — Gallery", "Kagathos - Gallery"],
        ["canvas — the craquelure", "canvas: the craquelure"],
        ["lots — 41", "lots: 41"],
        ["from — a bill", "from: a bill"]
    ],
    "app/private-sales/page.tsx": [
        ["Sales — Kalos", "Sales - Kalos"],
        ["range — a price", "range; a price"]
    ],
    "app/results/page.tsx": [["Results — Kalos", "Results - Kalos"]],
    "app/sale/page.tsx": [["Sale — Kalos", "Sale - Kalos"]],
    "app/sell/page.tsx": [
        ["us — Kalos", "us - Kalos"],
        ["saleroom — or in no saleroom — we will", "saleroom, or in no saleroom, we will"],
        ["from — a bill", "from: a bill"]
    ],
    "app/specialists/page.tsx": [["About — Kalos", "About - Kalos"]],
    "app/visit/page.tsx": [
        ["Visit — Kalos", "Visit - Kalos"],
        ["request — ask", "request; ask"]
    ],
    "components/Loupe.tsx": [
        ["div — the outer", "div, the outer"]
    ],
    "components/NewsletterForm.tsx": [
        ["Added — look", "Added. Look"]
    ],
    "components/forms/ValuationForm.tsx": [
        ["here — we'll", "here; we'll"]
    ]
};

for (const [filePath, reps] of Object.entries(replacements)) {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        for (const [oldText, newText] of reps) {
            content = content.replace(oldText, newText);
        }
        fs.writeFileSync(filePath, content, 'utf8');
    }
}
console.log('Done!');
