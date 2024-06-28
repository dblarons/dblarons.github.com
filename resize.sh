for i in public/img/original/*.jpg; do
    magick "$i" -strip -interlace Plane -quality 50% "public/img/resized/${i##*/}"
done