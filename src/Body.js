function bodyfun(comname,context){
    const body = `
    <!DOCTYPE html  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html bgcolor="#f4f4f4" xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta charset="UTF-8"><meta content="text/html; charset=utf-8" http-equiv="Content-Type"> <!--[if !mso]><!--> <meta content="IE=edge" http-equiv="X-UA-Compatible"> <!--<![endif]--> <meta content="width=device-width, initial-scale=1.0" name="viewport"><meta content="telephone=no" name="format-detection"><meta content="date=no" name="format-detection"><meta content="address=no" name="format-detection"><meta content="email=no" name="format-detection"><meta name="x-apple-disable-message-reformatting"><link href="https://fonts.googleapis.com/css?family=Fira+Sans:ital,wght@0,100;1,100;0,200;1,200;0,300;1,300;0,400;1,400;0,500;1,500;0,600;1,600;0,700;1,700;0,800;1,800;0,900;1,900" rel="stylesheet"><title>Untitled</title> <!--[if !mso]><!----> <style>@media  all {
        /* cyrillic-ext */
    @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Fira Sans Light'), local('FiraSans-Light'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKreSxf6Xl7Gl3LX.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Fira Sans Light'), local('FiraSans-Light'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKreQhf6Xl7Gl3LX.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* latin-ext */
    @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Fira Sans Light'), local('FiraSans-Light'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKreSBf6Xl7Gl3LX.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Fira Sans Light'), local('FiraSans-Light'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKreRhf6Xl7Glw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
                    /* cyrillic-ext */
    @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 500;
    src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveSxf6Xl7Gl3LX.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 500;
    src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveQhf6Xl7Gl3LX.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* latin-ext */
    @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 500;
    src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveSBf6Xl7Gl3LX.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 500;
    src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveRhf6Xl7Glw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
                    /* cyrillic-ext */
    @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSxf6Xl7Gl3LX.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* latin-ext */
    @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSBf6Xl7Gl3LX.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    }</style> <!--<![endif]--> <style>html,
    body {
    margin: 0 !important;
    padding: 0 !important;
    min-height: 100% !important;
    width: 100% !important;
    -webkit-font-smoothing: antialiased;
    }
    
    * {
    -ms-text-size-adjust: 100%;
    }
    
    #outlook a {
    padding: 0;
    }
    
    .ReadMsgBody,
    .ExternalClass {
    width: 100%;
    }
    
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass td,
    .ExternalClass div,
    .ExternalClass span,
    .ExternalClass font {
    line-height: 100%;
    }
    
    div[style*="margin: 14px 0"],
    div[style*="margin: 16px 0"] {
    margin: 0 !important;
    }
    
    table,
    td,
    th {
    mso-table-lspace: 0 !important;
    mso-table-rspace: 0 !important;
    border-collapse: collapse;
    }
    
    body, td, th, p, div, li, a, span {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    mso-line-height-rule: exactly;
    }
    
    img {
    border: 0;
    outline: none;
    line-height: 100%;
    text-decoration: none;
    -ms-interpolation-mode: bicubic;
    }
    
    a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    }
    
    .pc-gmail-fix {
    display: none;
    display: none !important;
    }
    
    @media (min-width: 621px) {
    .pc-lg-hide {
    display: none;
    } 
    
    .pc-lg-bg-img-hide {
    background-image: none !important;
    }
    }</style><style>@media (max-width: 620px) {
    .pc-project-body {min-width: 0px !important;}
    .pc-project-container {width: 100% !important;}
    .pc-sm-hide {display: none !important;}
    .pc-sm-bg-img-hide {background-image: none !important;}
    table.pc-w620-spacing-0-0-40-0 {margin: 0px 0px 40px 0px !important;}
    td.pc-w620-spacing-0-0-40-0,th.pc-w620-spacing-0-0-40-0{margin: 0 !important;padding: 0px 0px 40px 0px !important;}
    .pc-w620-fontSize-30 {font-size: 30px !important;}
    .pc-w620-lineHeight-40 {line-height: 40px !important;}
    .pc-w620-fontSize-16 {font-size: 16px !important;}
    .pc-w620-lineHeight-26 {line-height: 26px !important;}
    .pc-w620-padding-35-35-35-35 {padding: 35px 35px 35px 35px !important;}
    
    .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
    .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
    .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
    .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;}
    .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
    .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
    .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
    .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
    
    .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
    .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
    .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
    .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
    
    .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
    .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
    .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
    .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
    .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
    .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
    }
    @media (max-width: 520px) {
    .pc-w520-padding-30-30-30-30 {padding: 30px 30px 30px 30px !important;}
    }</style> <!--[if !mso]><!--> <style>@media all { @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 200; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnWKneSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v17/va9C4kDNxMZdWfMOD5VvkrjHYTI.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 300; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnPKreSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjL.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 300; src: url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrBiQyf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 100; src: url('https://fonts.gstatic.com/s/firasans/v17/va9C4kDNxMZdWfMOD5Vn9LjHYTI.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 200; src: url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrAGQCf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 100; src: url('https://fonts.gstatic.com/s/firasans/v17/va9A4kDNxMZdWfMOD5VvkrCqUT7fcQ.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 500; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnZKveSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 700; src: url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrByRCf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 600; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnSKzeSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 700; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 900; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnFK_eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 600; src: url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrAWRSf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 900; src: url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrBKRif2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrBuRyf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 500; src: url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrA6Qif2VFk.woff2') format('woff2'); } }</style> <!--<![endif]--> <!--[if mso]>
    <style type="text/css">
    .pc-font-alt {
    font-family: Arial, Helvetica, sans-serif !important;
    }
    </style>
    <![endif]--> <!--[if gte mso 9]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]--> </head> <body bgcolor="#f4f4f4" class="pc-font-alt" style="width: 100% !important;min-height: 100% !important;margin: 0 !important;padding: 0 !important;line-height: 1.5;color: #2D3A41;mso-line-height-rule: exactly;-webkit-font-smoothing: antialiased;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;font-variant-ligatures: normal;text-rendering: optimizeLegibility;-moz-osx-font-smoothing: grayscale;background-color: #f4f4f4;"><table bgcolor="#f4f4f4" border="0" cellpadding="0" cellspacing="0" class="pc-project-body" role="presentation" style="table-layout: fixed;min-width: 600px;background-color:#f4f4f4;" width="100%"><tr><td align="center" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" class="pc-project-container" role="presentation" style="width: 600px; max-width: 600px;" width="600"><tr><td align="left" style="padding: 20px 0px 20px 0px;" valign="top"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;" width="100%"><tr><td valign="top"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tr><td style="padding: 0px 0px 0px 0px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tr><td bgcolor="#1B1B1B" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 40px 40px;border-radius: 0px;background-color: #1B1B1B;" valign="top"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tr><td align="center" style="padding: 0px 0px 17px 0px;" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td align="center" class="pc-font-alt" style="mso-line-height: exactly;line-height: 121%;font-family: Fira Sans, Arial, Helvetica, sans-serif;font-size: 14px;font-weight: 500;color: #40be65;text-align: center;text-align-last: center;font-variant-ligatures: normal;" valign="top"><div><span>Raghavan</span> </div> </td> </tr> </table> </td> </tr> </table> <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tr><td align="center" style="padding: 0px 0px 30px 0px;" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td align="center" class="pc-font-alt pc-w620-fontSize-30 pc-w620-lineHeight-40" style="mso-line-height: exactly;line-height: 128%;letter-spacing: -0.6px;font-family: Fira Sans, Arial, Helvetica, sans-serif;font-size: 36px;font-weight: 800;color: #ffffff;text-align: center;text-align-last: center;font-variant-ligatures: normal;" valign="top"><div><span>${comname}</span> </div> </td> </tr> </table> </td> </tr> </table> <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tr><td align="center" style="padding: 0px 0px 29px 0px;" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td align="center" class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-26" style="mso-line-height: exactly;line-height: 156%;letter-spacing: -0.2px;font-family: Fira Sans, Arial, Helvetica, sans-serif;font-size: 18px;font-weight: 300;color: #ffffff;text-align: center;text-align-last: center;font-variant-ligatures: normal;" valign="top">${context}</td> </tr> </table> </td> </tr> </table> <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tr><td align="center"><table align="center" border="0" cellpadding="0" cellspacing="0" class="pc-w620-gridCollapsed-0 pc-width-hug" role="presentation"><tr class="pc-grid-tr-first pc-grid-tr-last"><td class="pc-grid-td-first pc-grid-td-last" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top"><table border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td align="center" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td align="center" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><th align="center" style="padding: 0px 0px 0px 0px; font-weight: normal; line-height: 1;" valign="top"> <!--[if mso]>
    <table  border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="border-collapse: separate; margin-right: auto; margin-left: auto;">
    <tr>
    <td valign="middle" align="center" style="border-radius: 8px; background-color: #1595e7; text-align: center; color: #ffffff; padding: 15px 17px 15px 17px; mso-padding-left-alt: 0; margin-left:17px;" bgcolor="#1595e7">
       <a class="pc-font-alt" style="display: inline-block; text-decoration: none; font-variant-ligatures: normal; font-family: Fira Sans, Arial, Helvetica, sans-serif; font-weight: 500; font-size: 16px; line-height: 150%; letter-spacing: -0.2px; color: #ffffff;" href="https://raghavan2005.netlify.app" target="_blank">Website</a>
    </td>
    </tr>
    </table>
    <![endif]--> <!--[if !mso]><!----> <!--<![endif]--> </th> </tr> </table> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table></td> </tr> </table> </td> </tr> </table> </td> </tr> <tr><td><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tr><td align="center" style="padding-top: 20px; padding-bottom: 20px; vertical-align: top;" valign="top"><a href="https://designmodo.com/postcards?uid=MjQwODU5&type=footer" style="text-decoration: none; overflow: hidden; border-radius: 2px; display: inline-block;" target="_blank"> </a> </td> </tr> </table> </td> </tr></table> </td> </tr> </table> </td> </tr> </table> <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div></body></html>
    `;
    
    


















return body;
}
module.exports = { bodyfun };