import defaultProfile from '../assets/images/nimek.jpg'
import Card from './Card'
import { useRef, useState } from 'react'
import { FiEdit } from "react-icons/fi";
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop, { centerCrop, makeAspectCrop, type Crop } from 'react-image-crop'

export const Profile = () => {
    const [imageSrc, setImageSrc] = useState('')
    const [error, setError] = useState('')
    const [crop, setCrop] = useState<Crop>({
        unit: '%',
        x: 25,
        y: 25,
        width: 50,
        height: 50
    })
    const avatarImage = useRef(defaultProfile)




    const onSelectFile = (e) => {
        const file = e.target.files?.[0];
        if (!file) return
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            const imageElement = new Image()
            const imgUrl = reader.result?.toString() || ""
            imageElement.src = imgUrl

            imageElement.addEventListener('load', (e) => {
                const { naturalWidth, naturalHeight } = e.currentTarget
                if (naturalWidth < 50 || naturalHeight < 50) {
                    setError('gambar harus lebih dari 150 px')
                    setImageSrc('')
                    return

                }
            })
            setImageSrc(imgUrl)
        })
        reader.readAsDataURL(file)
    }

    const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const { width, height, naturalHeight, naturalWidth } = e.currentTarget
        const crop = makeAspectCrop(
            { unit: '%', width: 50, }, 1, naturalWidth, naturalHeight
        )
        const centeredCrop = centerCrop(crop, width, height)
        setCrop(centeredCrop)
    }



    return (
        <main className='p-8 flex comfortaa-custom justify-center mt-12'>
            <section className='grid'>

                <div className='relative'>
                    <label
                        htmlFor='file'>
                        <div
                            className='w-42 h-42 flex items-center rounded-full 
            border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition cursor-pointer
            gap-12'>
                            <img className='w-full h-full rounded-full'
                                src={avatarImage.current} alt="profile" />
                            <label
                                htmlFor='file'
                                className='absolute -bottom-3 left-0 m-auto w-fit cursor-pointer'>
                                <FiEdit />
                            </label>
                        </div>
                    </label>
                    <input
                        type="file"
                        onChange={onSelectFile}
                        id="file"
                        accept='image/*'
                        className='hidden'
                    />
                </div>
                {error && <p className='text-red-400 text-sm mt-12'>{error}</p>}
                {imageSrc &&
                    <div className='mt-12'>
                        <ReactCrop crop={crop} circularCrop keepSelection aspect={1} minWidth={300} onChange={(_PixelCrop, percentCrop): void => setCrop(percentCrop)}>
                            <img src={imageSrc}
                                onLoad={onImageLoad}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '80vh'

                                }}
                                alt="" />
                        </ReactCrop>
                    </div>
                }
                {/* <div>
                    <p className='font-extrabold text-5xl'>fullname</p>
                    <p className='mt-2 font-medium text-xl'>nickname</p>
                    </div> */}


                <section className='mt-12'>
                    <Card />
                </section>
            </section>
        </main>
    )
}