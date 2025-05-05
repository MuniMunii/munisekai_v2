import { Cloudinary } from '@cloudinary/url-gen/index'
import { auto } from '@cloudinary/url-gen/actions/resize'
import { AdvancedImage } from '@cloudinary/react'
import { fit } from '@cloudinary/url-gen/actions/resize'
import { byAngle } from '@cloudinary/url-gen/actions/rotate'
type QualityProps='auto'|'low'|'medium'|'high'|'best'|number
const cld = new Cloudinary({ cloud: { cloudName: `${import.meta.env.VITE_CLOUDNAME}` } })
export function ImageOptimization({url,quality='auto',height,width,rotateAngle,className}:{className?:string,rotateAngle?:number,quality?:QualityProps,url:string,width?:number,height?:number}) {
    const myImage = cld.image(url).format('auto').quality(quality).resize(fit().width(width ?? 1920).height(height ?? 1080))
    if(rotateAngle){
      myImage.setVersion(Date.now())
        myImage.rotate(byAngle(rotateAngle))
    }
    return (<AdvancedImage cldImg={myImage} className={`object-contain ${className}`}/>)
}
export function BackgroundImageUrl({url,quality='auto',type}:{type:'video'|'img',url:string,quality?:QualityProps} ) {
    if(type === 'img'){
    const backgroundImageUrl = cld
      .image(`${url}`)
      .format('auto')
      .quality(quality)
      .resize(auto().width(1920).height(1080))
      .toURL()
      return `url(${backgroundImageUrl})`
    }
      if (type === 'video') {
        const backgroundVideoUrl = cld
          .video(url)
          .toURL()
          console.log(backgroundVideoUrl)
        return backgroundVideoUrl
      }
  }