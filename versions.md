**v1.0 (240602)** - ArciFS version deployed for the STI College Marikina's Senior HS Expo 

- Completed features:
    - Backend server, MySQL database, React + Vite frontned
    - POST endpoint for Power Automate flow/
    - Power Automate flow and Microsoft Forms form for "Customer Satisfaction Survey for Cucina de Marquina"

---

**v1.1 (240604)**
- Updates:
    - Fixed major issues
        - tbl_fs_formresponses: response_data, unnecessary length and redundancy of processed and stored JSON string
        - frontend Responses page unable to render the questions by their defined order
        - fixed how backend processes data from PA flow
    - Initial implementation of Export function
        - exporting response data to CSV