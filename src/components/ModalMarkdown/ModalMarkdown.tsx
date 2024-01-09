import { Box, Modal } from '@mui/material'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

interface IModalMarkdown {
    open: boolean
    onClose: () => void
    content: string
}

const ModalMarkdown = ({ open, onClose, content }: IModalMarkdown) => {
    return (
        <Modal
            className="flex justify-center items-center"
            open={open}
            onClose={onClose}
        >
            <Box className="overflow-y-scroll modal_container">
                {content ? (
                    <Markdown
                        rehypePlugins={[rehypeHighlight, remarkGfm, rehypeRaw]}
                        className="markdown h-full w-full px-4 py-5"
                    >
                        {content}
                    </Markdown>
                ) : (
                    <div className="flex justify-center items-center h-full">
                        <h1 className="text-4xl text-gray-600 uppercase block font-bold">
                            Empty content
                        </h1>
                    </div>
                )}
            </Box>
        </Modal>
    )
}

export default ModalMarkdown
