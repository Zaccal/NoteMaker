// import { useState } from 'react'
// import { styled } from '@mui/material/styles'
// import FormatBoldIcon from '@mui/icons-material/FormatBold'
// import FormatItalicIcon from '@mui/icons-material/FormatItalic'
// import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
// import Divider from '@mui/material/Divider'
// import Paper from '@mui/material/Paper'
// import ToggleButton from '@mui/material/ToggleButton'
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
// import { CodeLanguage, TypeFormats, TypeSetState } from '../../../types/types'
// import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
// import { CodeMarkdown } from '../../../utils/utils'

// const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
//     '& .MuiToggleButtonGroup-grouped': {
//         margin: theme.spacing(0.5),
//         border: 0,
//         '&.Mui-disabled': {
//             border: 0,
//         },
//         '&:not(:first-of-type)': {
//             borderRadius: theme.shape.borderRadius,
//         },
//         '&:first-of-type': {
//             borderRadius: theme.shape.borderRadius,
//         },
//     },
// }))

// // interface ITextBarTool {
// //     saveFormats: TypeSetState<TypeFormats | null>
// //     saveLanguageCode: TypeSetState<CodeLanguage>
// // }

// const TextBarTool = () => {
//     // const [formats, setFormats] = useState<TypeFormats | null>(null)
//     // const [currentLanguageCode, setCurrentLanguageCode] =
//         // useState<CodeLanguage>('javascript')

//     // const handleFormat = (
//     //     _: React.MouseEvent<HTMLElement>,
//     //     newFormats: TypeFormats | null
//     // ) => {
//     //     setFormats(newFormats)
//     //     saveFormats(newFormats)
//     // }

//     const handleLanguageCode = (event: SelectChangeEvent<CodeLanguage>) => {
//         const {
//             target: { value },
//         } = event

//         setCurrentLanguageCode(value as CodeLanguage)
//         saveLanguageCode(value as CodeLanguage)
//     }

//     return (
//         <Paper
//             elevation={0}
//             className="flex items-center border-backgroundPrimary border-t-0 border-r-0 !rounded-sm flex-wrap !bg-backgroundAccent"
//         >
//             <StyledToggleButtonGroup
//                 size="small"
//                 value={formats}
//                 onChange={handleFormat}
//                 aria-label="text formatting"
//             >
//                 <ToggleButton value="code" aria-label="code">
//                     <CodeRoundedIcon />
//                 </ToggleButton>
//             </StyledToggleButtonGroup>
//             <div>
//                 <Select
//                     className="!text-text Select"
//                     onChange={handleLanguageCode}
//                     value={currentLanguageCode}
//                     variant="filled"
//                 >
//                     {Object.keys(CodeMarkdown).map(languageData => (
//                         <MenuItem key={languageData} value={languageData}>
//                             {languageData}
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </div>
//             <Divider
//                 flexItem
//                 orientation="vertical"
//                 className="bg-text"
//                 sx={{ mx: 0.5, my: 1 }}
//             />
//             <StyledToggleButtonGroup
//                 exclusive
//                 size="small"
//                 value={formats}
//                 onChange={handleFormat}
//                 aria-label="text formatting"
//             >
//                 <ToggleButton value="bold" aria-label="bold">
//                     <FormatBoldIcon />
//                 </ToggleButton>
//                 <ToggleButton value="italic" aria-label="italic">
//                     <FormatItalicIcon />
//                 </ToggleButton>
//             </StyledToggleButtonGroup>
//         </Paper>
//     )
// }

// export default TextBarTool
