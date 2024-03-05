import { useTheme, Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
    const { palette: { neutral }, } = useTheme();

    return (
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap={"clamp(20px, 30px, 40px)"}
            >
                <Box
                    width={"clamp(20%, 30%, 40%)"}
                >
                    <Typography
                        variant="h4"
                        fontWeight={"bold"}
                        mb={"30px"}
                        color={shades.secondary[500]}
                    >
                        ECOMMER
                    </Typography>
                    <div>
                        gdfgfgdfjgndfjgndfjkgdfjkgdfjkgnj ngjdfgjn knjdfngjn gndfjk gjkdfnjk jgdjgdfjkgn jgkfdg jkgfdjgnfjkdg
                        gdfgfgdfjgndfjgndfjkgdfjkgdfjkgnj ngjdfgjn knjdfngjn gndfjk gjkdfnjk jgdjgdfjkgn jgkfdg jkgfdjgnfjkdg
                        gdfgfgdfjgndfjgndfjkgdfjkgdfjkgnj ngjdfgjn knjdfngjn gndfjk gjkdfnjk jgdjgdfjkgn jgkfdg jkgfdjgnfjkdg
                        gdfgfgdfjgndfjgndfjkgdfjkgdfjkgnj ngjdfgjn knjdfngjn gndfjk gjkdfnjk jgdjgdfjkgn jgkfdg jkgfdjgnfjkdg
                    </div>
                </Box>
                <Box>
                    <Typography variant="h4" fontWeight={"bold"} mb={"30px"}>
                        About Us
                    </Typography>
                    <Typography mb={"30px"}>
                        Careers
                    </Typography>
                    <Typography mb={"30px"}>
                        Our Stores
                    </Typography>
                    <Typography mb={"30px"}>
                        Terms & Conditions
                    </Typography>
                    <Typography mb={"30px"}>
                        Privacy Policy
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight={"bold"} mb={"30px"}>
                        Customer Care
                    </Typography>
                    <Typography mb={"30px"}>
                        Help Center
                    </Typography>
                    <Typography mb={"30px"}>
                        Track your order
                    </Typography>
                    <Typography mb={"30px"}>
                        Corporate & Bulk Purchasing
                    </Typography>
                    <Typography mb={"30px"}>
                        Repair & Refund
                    </Typography>
                </Box>

                <Box
                    width={"clamp(20%, 25%, 30%)"}
                >
                    <Typography variant="h4" fontWeight={"bold"} mb={"30px"}>
                        Contact Us
                    </Typography>
                    <Typography mb={"30px"}>
                        10 Washin DC
                    </Typography>
                    <Typography mb={"30px"}>
                        Email: testing@test.com
                    </Typography>
                    <Typography mb={"30px"}>
                        (123) 456 789
                    </Typography>         
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;