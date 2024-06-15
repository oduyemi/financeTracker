import React from "react";
import { Box, Typography } from "@mui/material";
import Button from "./element/Button";




export const Landing = () => {
    return(
        <Box className="container mx-auto">
        <Box className="flex flex-wrap">
            <Box maxWidth="xl" className="">
                <Box className="_logo">
                    <img className="mb-2" src={require("../assets/images/logo/logo.png")} alt="logo" id="logo" />
                </Box>
                <Box className="mb-3">
                    <Typography 
                        variant="h6" 
                        sx={{
                            fontSize: "16px",
                            fontWeight: 200
                        }}
                        paragraph 
                        className="_intro animate__animated animate__fadeIn animate__delay-1s"
                    >
                        Use money to gain control over your time, 
                        because not having control of your time is 
                        such a powerful and universal drag on happiness.
                    </Typography>
                    <Box id="purpose">
                        <Typography
                            variant="h4" 
                            className="_dropdown animate__animated animate__fadeIn"
                            sx={{
                                fontSize:"16px"
                            }}
                        >
                            I want to track my...
                        </Typography>
                        <Box className="_ctadropdown">
                            <select 
                                name="finance_type" 
                                id="finance_type" 
                                className="my-4 block w-full border border-gray-300 rounded-md  
                                shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">- Choose One -</option>
                                <option value="income">Income</option>
                                <option value="expenses">Expenses</option>
                            </select>
                            <Button >
                                Continue
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box className="bg-main w-full md:w-4/12 mx-auto" id="headintro">
                <Typography 
                    variant="h5"
                    sx={{
                        margin: "10px",
                        padding: "10px",
                        fontWeight: 200
                    }}
                    paragraph
                    className="text-white pl-4 pr-5 mr-5 my-5 animate__animated 
                    animate__flash animate__delay-3"
                    id="_intro_msg"
                >
                    <span>
                        Be on top of your own game
                    </span><br/><br/>
                    Track all your income and finances today.
                </Typography>
            </Box>
        </Box>
    </Box>

    )
}