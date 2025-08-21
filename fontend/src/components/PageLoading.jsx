import { LoaderIcon } from 'lucide-react'
import React from 'react'
import { useThemeStore } from '../store/useThemeStore'

const PageLoading = () => {
    const { theme } = useThemeStore();
    return (
        <div className='min-h-screen flex items-center justify-center' data-theme={theme}>
            <LoaderIcon className='animate-spin size-10' />
        </div>
    )
}

export default PageLoading