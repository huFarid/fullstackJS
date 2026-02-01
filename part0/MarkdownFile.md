# Part 0 Exercises

## 0.4: New Note Diagram (classic app)
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /notes (page load)
    activate server
    server-->>browser: HTML
    deactivate server

    browser->>server: GET /main.css
    activate server
    server-->>browser: CSS
    deactivate server

    browser->>server: GET /main.js
    activate server
    server-->>browser: JavaScript
    deactivate server

    browser->>server: GET /data.json (existing notes)
    activate server
    server-->>browser: JSON list of notes
    deactivate server

    Note right of browser: User writes a new note and clicks Save
    browser->>server: POST /notes (new note)
    activate server
    server-->>browser: Updated note data
    deactivate server
