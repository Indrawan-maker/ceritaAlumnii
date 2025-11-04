export const ImageCropper = () => {
    return (
        <>
            <label
                htmlFor='file'
                className='w-42 h-42 flex items-center rounded-full 
            border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition cursor-pointer
            gap-12'>

                <input
                    type="file"
                    id="file"
                    accept='image/*'
                    className='hidden'
                />
                
            </label>
        </>
    )
}