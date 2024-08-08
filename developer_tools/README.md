# Web Stack Programming Project - Curriculum [C#22]

## Project Overview

In this project, will analyze and interact with the website [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/) using browser Developer Tools. The goal is to familiarize with various functionalities and features provided by Developer Tools in modern browsers.

## Learning Objectives

By the end of this project, will should be able to:

- Explain what Developer Tools are and how to access them on different browsers.
- Use the Elements tab to edit HTML and CSS.
- Audit a page using Lighthouse and implement suggested improvements.
- Create and run snippets on a page.
- Retrieve information about files and server configurations.
- Block network requests and analyze JavaScript and CSS usage.
- Detect 404 errors and manipulate page elements.
- Perform various other tasks related to web development and debugging.

## Requirements

- Use the newest version of Google Chrome browser (78.0.3904.70 or later).
- Ensure that will have a `README.md` file at the root of the project folder.
- Screenshots can be taken via operating system, not necessarily through DevTools.

## Tasks

1. **Responsive Device**  
   - Navigate to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).
   - Take a screenshot of the website using the device toolbar with iPhone X selected, showing the size in pixels.

   **File**: `0-responsive_device.png`

2. **Change Background Color**  
   - Change the background color of the body to `#4233bd`.
   - Take a screenshot of the PORTFOLIO section.

   **File**: `1-change_bg_color.png`

3. **Force Element State**  
   - Force the hover state of the "cake" block in the Portfolio section.
   - Take a screenshot of it.

   **File**: `2-pathways_menu.png`

4. **Copy All Button Styles**  
   - Copy all CSS styling applied to the "Download me!" button.

   **File**: `3-button_styles`

5. **Change Button Styles**  
   - Change the background color of all primary buttons to `#0080ee`.
   - Change the text color of all outlined buttons to `#0020aa`.
   - Take a screenshot of the changed buttons and merge them into one image.

   **File**: `4-new_buttons.png`

6. **Remove Part of the Website**  
   - Remove the div of the "cake" box in the Portfolio section.
   - Take a screenshot of the result.

   **File**: `5-deleted_elements.png`

7. **File Declaration Source**  
   - Check the Computed tab for the `h2` with text "ABOUT" and identify the file source for the `margin-bottom` declaration.

   **File**: `6-declaration_file`

8. **Number of Click Listeners**  
   - Determine how many times click events are referenced in JavaScript files.

   **File**: `7-number_of_listeners`

9. **HSL Code for Button Background**  
   - Find the HSL equivalent of the hexadecimal background color for the "Send" button.

   **File**: `8-hsl`

10. **Max Width of Container**  
    - Determine the max-width of the first `.container` in the "About" section.

    **File**: `9-max_width`

11. **Moving Sections**  
    - Switch the "About" and "Portfolio" sections.
    - Take a screenshot of the result.

    **File**: `10-moved_around.png`

12. **File Coverage**  
    - Determine the size of the `freelancer.css` file in bytes.

    **File**: `11-coverage`

13. **Print Version Emulation**  
    - Emulate the print version of the webpage and take a screenshot.

    **File**: `12-print_version.png`

14. **Console Command**  
    - Type `console.log(document.title)` in the console and record the result.

    **File**: `13-logo_dollar0`

15. **Holberton Web Framework**  
    - Identify the front-end framework used on the page and provide the letter of the answer.

    **File**: `15-hbtn_framework`

16. **Homepage Weight**  
    - Determine the total weight of the page with all elements and take a screenshot.

    **File**: `16-weight.png`

17. **Number of Requests**  
    - Find out the number of requests made when accessing the page and take a screenshot.

    **File**: `17-requests.png`

18. **Number of CSS Files**  
    - Count the number of CSS resources loaded on the page.

    **File**: `18-css_loaded`

19. **Number of Images**  
    - Count the number of image resources loaded on the page.

    **File**: `19-images_loaded`

20. **Favicon Image Type**  
    - Identify the type of the favicon image.

    **File**: `20-favicon_type`

21. **Font Library**  
    - Determine the font library used for icons on the website.

    **File**: `21-hbtn_font_lib`

22. **XHR Calls**  
    - Identify the resource that generates 1 XHR call.

    **File**: `22-xhr_calls`

23. **Performance Audit**  
    - Record the performance notation from Lighthouse for desktop mode and no throttling.

    **File**: `23-performance_audit.png`

24. **Static Assets Cache Policy**  
    - Determine how many static assets need a better cache policy and take a screenshot.

    **File**: `24-static_assets_audit.png`

25. **Accessibility Contrast Issue**  
    - Identify the contrast issue found during an accessibility audit and provide the letter of the answer.

    **File**: `25-contrast_issue`

26. **No Alt Attributes**  
    - List the classes of images without `alt` attributes.

    **File**: `26-no_alt`

27. **Missing Attributes on Links**  
    - Identify which attribute is missing on all links with `target="_blank"` and provide the letter of the answer.

    **File**: `27-missing_attr`

28. **SEO Link Descriptions**  
    - Identify links with insufficient text descriptions and take a screenshot.

    **File**: `28-unclear_desc.png`

29. **JavaScript Snippets**  
    - Create a snippet named `allcolors.js`, run it, and take a screenshot of the result.

    **File**: `29-how_many_colors.png`

30. **Block CSS Files**  
    - Block all CSS requests and take a screenshot.

    **File**: `30-no_css.png`

31. **Session Storage Key**  
    - Identify the only key present in the session storage for the page.

    **File**: `31-session_storage_key`

32. **Service Workers**  
    - Determine if the page has any service workers (Yes or No).

    **File**: `32-service_workers`

33. **SSL Certificate Issuer**  
    - Identify the organization that issued the SSL certificate for the page.

    **File**: `33-ssl_cert`

34. **SSL Certificate Expiration**  
    - Determine when the SSL certificate expires and take a screenshot.

    **File**: `34-ssl_expiration.png`

