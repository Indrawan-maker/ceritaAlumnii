import defaultProfile from '../assets/images/nimek.jpg'
import Card from './Card'
import { useRef, useState } from 'react'
import { FiEdit } from "react-icons/fi";
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop, {
    centerCrop,
    convertToPixelCrop,
    makeAspectCrop,
    type Crop
} from 'react-image-crop'
import setCanvasPreview from '../utils/setCanvasPreview'

export const Profile = () => {
    // Refs
    const imgRef = useRef<HTMLImageElement | null>(null)
    const previewCanvasRef = useRef<HTMLCanvasElement | null>(null)
    const avatarCache = useRef<string>(defaultProfile) // untuk simpan data permanen (non-render)

    // State
    const [avatar, setAvatar] = useState<string>(defaultProfile) // tampil di UI
    const [imageSrc, setImageSrc] = useState<string>('') // gambar yang akan di-crop
    const [error, setError] = useState<string>('')
    const [crop, setCrop] = useState<Crop>({
        unit: '%',
        x: 25,
        y: 25,
        width: 50,
        height: 50
    })

    // ---- Saat pilih file ----
    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = () => {
            const imgUrl = reader.result?.toString() || ''
            const imageElement = new Image()
            imageElement.src = imgUrl

            imageElement.onload = (ev) => {
                if (error) setError('')
                const target = ev.currentTarget as HTMLImageElement
                const { naturalWidth, naturalHeight } = target

                // Validasi ukuran minimal
                if (naturalWidth < 150 || naturalHeight < 150) {
                    setError('Gambar harus lebih dari 150px')
                    setImageSrc('')
                    return
                }

                setImageSrc(imgUrl)
            }
        }
        reader.readAsDataURL(file)
    }

    // ---- Saat gambar crop dimuat ----
    const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const { naturalWidth, naturalHeight } = e.currentTarget
        const crop = makeAspectCrop(
            { unit: '%', width: 50 },
            1,
            naturalWidth,
            naturalHeight
        )
        const centeredCrop = centerCrop(crop, naturalWidth, naturalHeight)
        setCrop(centeredCrop)
    }

    // ---- Preview hasil crop ----
    const handlePreview = () => {
        if (
            imgRef.current &&
            previewCanvasRef.current &&
            crop.width &&
            crop.height
        ) {
            const pixelCrop = convertToPixelCrop(
                crop,
                imgRef.current.width,
                imgRef.current.height
            )
            setCanvasPreview(imgRef.current, previewCanvasRef.current, pixelCrop)
            const dataUrl = previewCanvasRef.current.toDataURL()
            updateAvatar(dataUrl)
        }
    }

    // ---- Update avatar (gabungan Ref + State) ----
    const updateAvatar = (imgSrc: string) => {
        avatarCache.current = imgSrc     // simpan data
        setAvatar(imgSrc)                // trigger re-render
        setImageSrc('')                  // tutup cropper setelah update
    }

    return (
        <main className="p-8 flex comfortaa-custom justify-center mt-12">
            <section className="grid">
                {/* Profile Image */}
                <div className="relative">
                    <label htmlFor="file">
                        <div
                            className="w-42 h-42 flex items-center rounded-full 
                            border border-black shadow-[8px_8px_0px_black]
                            hover:shadow-[2px_2px_0px_black] hover:translate-y-1 
                            transition cursor-pointer gap-12"
                        >
                            <img
                                className="w-full h-full rounded-full"
                                src={avatar}
                                alt="profile"
                            />
                            <label
                                htmlFor="file"
                                className="absolute -bottom-3 left-0 m-auto w-fit cursor-pointer"
                            >
                                <FiEdit />
                            </label>
                        </div>
                    </label>

                    <input
                        type="file"
                        onChange={onSelectFile}
                        id="file"
                        accept="image/*"
                        className="hidden"
                    />
                </div>

                {/* Error message */}
                {error && <p className="text-red-400 text-sm mt-4">{error}</p>}

                {/* Crop section */}
                {imageSrc && (
                    <div className="mt-12">
                        <ReactCrop
                            crop={crop}
                            circularCrop
                            keepSelection
                            aspect={1}
                            minWidth={150}
                            onChange={(_pixelCrop, percentCrop) => setCrop(percentCrop)}
                        >
                            <img
                                src={imageSrc}
                                ref={imgRef}
                                onLoad={onImageLoad}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '80vh',
                                }}
                                alt="to crop"
                            />
                        </ReactCrop>
                        <div className='flex justify-start items-center'>
                        <button
                            className="text-black text-xs py-2 px-4 border mt-4"
                            onClick={handlePreview}
                            >
                            update 
                        </button>
                            </div>
                    </div>
                )}

                {/* Hidden Canvas */}
                <canvas
                    ref={previewCanvasRef}
                    style={{
                        display: 'none',
                        objectFit: 'contain',
                        width: '150px',
                        height: '150px',
                    }}
                />

                {/* Card Section */}
                <section className="mt-12">
                    <Card />
                </section>
            </section>
        </main>
    )
}
