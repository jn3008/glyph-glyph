import argparse
from PIL import Image, ImageDraw, ImageFont

def generate_glyph_image(
    glyph: str,
    font_path: str,
    font_size: int,
    outline_width: int,
    output_path: str
):
    font = ImageFont.truetype(font_path, font_size, layout_engine=ImageFont.LAYOUT_RAQM)

    temp_image = Image.new("RGBA", (1, 1))
    temp_draw = ImageDraw.Draw(temp_image)
    bbox = temp_draw.textbbox((0, 0), glyph, font=font)
    text_width, text_height = bbox[2] - bbox[0], bbox[3] - bbox[1]

    image_size = (128, 128)
    image = Image.new("RGBA", image_size, (255, 255, 255, 0)) 
    draw = ImageDraw.Draw(image)

    x = (image_size[0] - text_width) // 2 - bbox[0]
    y = (image_size[1] - text_height) // 2 - bbox[1]

    for dx in range(-outline_width, outline_width + 1):
        for dy in range(-outline_width, outline_width + 1):
            if dx**2 + dy**2 <= outline_width**2:
                draw.text((x + dx, y + dy), glyph, font=font, fill="white")

    draw.text((x, y), glyph, font=font, fill="black")

    image.save(output_path, "PNG")
    print(f"Image saved to {output_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="generate a favicon of a glyph with a white outline.")
    parser.add_argument("glyph", type=str, help="glyph to generate")
    parser.add_argument("font_path", type=str, help="path to the font file")
    parser.add_argument("font_size", type=int, help="font size")
    parser.add_argument("outline_width", type=int, help="outline width")
    parser.add_argument("output_path", type=str, help="output path")

    args = parser.parse_args()

    generate_glyph_image(
        glyph=args.glyph,
        font_path=args.font_path,
        font_size=args.font_size,
        outline_width=args.outline_width,
        output_path=args.output_path,
    )

# python3 static/generate_favicon.py グ ~/.local/share/fonts/NotoSansJP-ExtraBold.ttf 112 8 static/favicon.png
