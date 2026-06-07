const emailTemplate = (fullName, email, message) => {
    return `
        <div style=" background:#0b0b1a; padding:40px 20px; font-family:Arial,sans-serif; color:#ffffff; "> 
            <div style=" max-width:650px; margin:auto; background:#111122; border:1px solid rgba(168,85,247,0.18); border-radius:22px; overflow:hidden; box-shadow:0 0 30px rgba(168,85,247,0.08); ">
                <!-- Header -->
                <div style=" text-align:center; padding:28px 32px; background:linear-gradient( 90deg, #8b5cf6, #d946ef ); "> 
                    <h1 style=" margin:0; font-size:28px; color:white; ">
                        New Portfolio Message
                    </h1> 
                    <p style=" margin:8px 0 0; color:rgba(255,255,255,0.85); font-size:14px; ">
                        Someone contacted you through your portfolio.
                    </p> 
                </div> 

                <!-- Content --> 
                <div style="padding:28px;"> 
                    <!-- Top Row --> 
                    <div style=" display:flex; gap:16px; margin-bottom:20px; "> 
                        <!-- Name --> 
                        <div style=" flex:1; width:50%; padding:18px; border-radius:16px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.05); "> 
                            <p style=" margin:0; font-size:12px; color:#c084fc; text-transform:uppercase; letter-spacing:1px; ">
                                Full Name
                            </p> 
                            <h2 style=" margin:8px 0 0; font-size:18px; color:white; ">
                                ${fullName}
                            </h2> 
                        </div> 

                        <!-- Email --> 
                        <div style=" flex:1; width:50%; padding:18px; border-radius:16px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.05); "> 
                            <p style=" margin:0; font-size:12px; color:#c084fc; text-transform:uppercase; letter-spacing:1px; ">
                                Email
                            </p> 
                            <h2 style=" margin:8px 0 0; font-size:16px; color:white; word-break:break-word; ">
                                ${email}
                            </h2> 
                        </div> 
                    </div> 

                    <!-- Message --> 
                    <div style=" padding:22px; border-radius:18px; background:rgba(139,92,246,0.08); border:1px solid rgba(168,85,247,0.15); "> 
                        <p style=" margin:0 0 14px; font-size:12px; color:#c084fc; text-transform:uppercase; letter-spacing:1px; ">
                            Message
                        </p> 
                        <p style=" margin:0; line-height:1.8; font-size:15px; color:#e5e7eb; white-space:pre-line; ">
                            ${message}
                        </p> 
                    </div> 
                </div> 

                <!-- Footer --> 
                <div style=" padding:18px; text-align:center; border-top:1px solid rgba(255,255,255,0.05); color:#9ca3af; font-size:12px; ">
                    Portfolio • Rohit Raj 
                </div> 
            </div> 
        </div> 
`}

export default emailTemplate;