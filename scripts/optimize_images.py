import os
from PIL import Image

def optimize_images():
    targets = [
        'public',
        'public/images'
    ]
    
    total_orig = 0
    total_new = 0

    for folder in targets:
        for fname in os.listdir(folder):
            fpath = os.path.join(folder, fname)
            if not os.path.isfile(fpath):
                continue
            
            ext = os.path.splitext(fname)[1].lower()
            if ext in ['.jpg', '.jpeg']:
                orig_size = os.path.getsize(fpath)
                total_orig += orig_size
                with Image.open(fpath) as img:
                    rgb = img.convert('RGB')
                    rgb.save(fpath, format='JPEG', quality=82, optimize=True)
                new_size = os.path.getsize(fpath)
                total_new += new_size
                print(f"Compressed JPEG: {fpath} ({orig_size/1024:.1f} KB -> {new_size/1024:.1f} KB)")

            elif ext == '.png':
                orig_size = os.path.getsize(fpath)
                total_orig += orig_size
                with Image.open(fpath) as img:
                    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                        img.save(fpath, format='PNG', optimize=True)
                    else:
                        quant = img.convert('P', palette=Image.ADAPTIVE, colors=256)
                        quant.save(fpath, format='PNG', optimize=True)
                new_size = os.path.getsize(fpath)
                total_new += new_size
                print(f"Compressed PNG: {fpath} ({orig_size/1024:.1f} KB -> {new_size/1024:.1f} KB)")

    print(f"\nDone! Total size reduced from {total_orig/(1024*1024):.2f} MB to {total_new/(1024*1024):.2f} MB")
    print(f"Savings: {(1 - total_new/total_orig)*100:.1f}%")

if __name__ == '__main__':
    optimize_images()
