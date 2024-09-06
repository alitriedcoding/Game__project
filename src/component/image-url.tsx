import noimage from "../Images/Image Placeholder/no-image-placeholder-6f3882e0.webp";
const imageCrop = (url: string) => {
  const target = "media/";
  if (!url) return noimage;
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default imageCrop;
