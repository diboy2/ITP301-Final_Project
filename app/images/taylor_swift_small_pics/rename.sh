a=1
for i in *.bmp; do
  new=$(printf "%d.bmp" "$a") #04 pad to length of 4
  mv -- "$i" "$new"
  let a=a+1
done