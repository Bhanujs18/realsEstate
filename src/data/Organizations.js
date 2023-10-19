const organizations = [{
"img" : "https://brandslogo.net/wp-content/uploads/2013/08/dlf-vector-logo.png"
},
{
    "img" : "https://gobeep.in/wp-content/uploads/2022/04/trump-towers-launch-delhi-ncr-beep-agency-marketing-event-management.jpg"
    },
    {
        "img" : "https://www.axiomlandbase.in/wp-content/uploads/2019/12/Elan-logo.png"
        },
        {
            "img" : "https://portal.tradebrains.in/_next/image?url=https%3A%2F%2Ftradebrains-portal.s3.ap-south-1.amazonaws.com%2FNIFTY50%2FGODREJPROP.png&w=384&q=75"
            },
            {
                "img" : "https://photos.fliarbi.com/5ec4857bb7cba-logo.png"
                },
                {
                    "img" : "https://www.axiomlandbase.in/wp-content/uploads/2019/12/aipl-logo.png"
                    },
                    {
                        "img" : "https://www.axiomlandbase.in/wp-content/uploads/2019/06/m3m-logo.png"
                        },
                        {
                            "img" : "data:image/png;base64,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"
                            },
                            {
                                "img" : "https://smartworlddevelopers.com/wp-content/themes/smartWorld/img/smartWorldLogo.jpg"
                                },
                                {
                                    "img" : "https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png"
                                    },
                                    {
                                        "img" : "data:image/png;base64,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"
                                        },
                                        {
                                            "img" : "https://www.larisarealtech.com/wp-content/uploads/2020/10/Signature-Global-Logo.jpg"
                                            },
                                            {
                                                "img" : "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/myoticfmwjr7ujwkc0hd"
                                                }]

export default organizations;