#!/usr/bin/env python3
"""
Python script to download real images from https://htuindia.in/ into public/images/
"""
import os
import urllib.request

output_dir = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(output_dir, exist_ok=True)

images = [
    ("https://htuindia.in/wp-content/uploads/slider/cache/647df817df2a64ad83446ae1a23d7fcd/KNS6385-1-scaled-1.jpg", "convocation-hero.jpg"),
    ("https://htuindia.in/wp-content/uploads/slider/cache/ab4e81a840c30cea1dd0b2baa5cd3226/FB_IMG_1712246045227-1.jpg", "pastors-faculty.jpg"),
    ("https://htuindia.in/wp-content/uploads/slider/cache/4ba8a65d802c77aef252d2ed23b2109a/FB_IMG_1712246159989-1.jpg", "theology-students.jpg"),
    ("https://htuindia.in/wp-content/uploads/2025/05/HTUWEB-BANNER.jpg", "htu-web-banner.jpg"),
    ("https://htuindia.in/wp-content/uploads/2025/05/D1.jpg", "dr-john-wesly.jpg"),
    ("https://htuindia.in/wp-content/uploads/2025/05/D2.jpg", "dr-vallepu-varaprasad.jpg"),
    ("https://htuindia.in/wp-content/uploads/2025/05/D3.jpg", "dr-vempati-raghuram.jpg"),
]

headers = {'User-Agent': 'Mozilla/5.0'}
print("Downloading real images from https://htuindia.in/...")

for url, filename in images:
    dest = os.path.join(output_dir, filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp, open(dest, "wb") as f:
            f.write(resp.read())
        print(f"Downloaded {filename} ({os.path.getsize(dest)} bytes)")
    except Exception as e:
        print(f"Could not download {filename} directly ({e}).")

print("Done.")
