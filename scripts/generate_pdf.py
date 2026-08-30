def make_pdf(filename):
    content_stream = []
    
    def esc(text):
        return text.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')
        
    def add_text(font, size, x, y, text):
        content_stream.append(f'BT /{font} {size} Tf {x:.1f} {y:.1f} Td ({esc(text)}) Tj ET')
        
    def add_line(x1, y1, x2, y2, width=0.75, r=0.7, g=0.7, b=0.7):
        content_stream.append(f'{width} w {r} {g} {b} RG {x1:.1f} {y1:.1f} m {x2:.1f} {y2:.1f} l S 0 0 0 RG')

    cur_y = 756
    
    # Header Name
    add_text('F1', 18, 36, cur_y, 'KANISHKA YADAV')
    cur_y -= 14
    
    # Subtitle / Contact
    add_text('F2', 8.5, 36, cur_y, 'San Jose, CA  |  11kanishkay@gmail.com  |  linkedin.com/in/kanishkayadvv  |  github.com/kanishkay')
    cur_y -= 16
    
    # Section: EDUCATION
    add_text('F1', 10, 36, cur_y, 'EDUCATION')
    add_line(36, cur_y - 2, 576, cur_y - 2, 0.5, 0.6, 0.6, 0.6)
    cur_y -= 14
    
    add_text('F1', 9.5, 36, cur_y, 'San Jose State University')
    add_text('F2', 9, 490, cur_y, 'San Jose, CA')
    cur_y -= 11
    
    add_text('F3', 9, 36, cur_y, 'Bachelor of Science in Data Science')
    add_text('F2', 9, 470, cur_y, 'Expected May 2027')
    cur_y -= 11
    
    add_text('F2', 8.5, 36, cur_y, 'Relevant Coursework: Data Structures and Algorithms, Artificial Intelligence, Computer Systems, Database Management Systems, Object-Oriented Design, Linear Algebra, Discrete Mathematics, Statistical Programming with R, Applied Probability and Statistics, Calculus I & II')
    cur_y -= 16
    
    # Section: EXPERIENCE
    add_text('F1', 10, 36, cur_y, 'EXPERIENCE')
    add_line(36, cur_y - 2, 576, cur_y - 2, 0.5, 0.6, 0.6, 0.6)
    cur_y -= 13
    
    # 7-Eleven
    add_text('F1', 9.5, 36, cur_y, '7-Eleven')
    add_text('F2', 9, 520, cur_y, 'Irving, TX')
    cur_y -= 11
    add_text('F3', 9, 36, cur_y, 'Break Through Tech AI Studio Fellow')
    add_text('F2', 9, 478, cur_y, 'Aug. 2026 - Present')
    cur_y -= 11
    add_text('F2', 8.5, 46, cur_y, '- Partnered with 7-Eleven on an industry AI challenge through Break Through Tech, engineering machine learning pipelines.')
    cur_y -= 14
    
    # SAP America
    add_text('F1', 9.5, 36, cur_y, 'SAP America, Inc.')
    add_text('F2', 9, 502, cur_y, 'Palo Alto, CA')
    cur_y -= 11
    add_text('F3', 9, 36, cur_y, 'AI Software Developer Intern')
    add_text('F2', 9, 465, cur_y, 'Jun. 2026 - Aug. 2026')
    cur_y -= 11
    add_text('F2', 8.5, 46, cur_y, '- Worked with Cloud Infrastructure Automation workflows, supporting enterprise deployment pipelines and system synchronization.')
    cur_y -= 14
    
    # AGENTIS
    add_text('F1', 9.5, 36, cur_y, 'AGENTIS')
    add_text('F2', 9, 500, cur_y, 'San Jose, CA')
    cur_y -= 11
    add_text('F3', 9, 36, cur_y, 'Co-Founder & AI Engineer')
    add_text('F2', 9, 465, cur_y, 'Feb. 2026 - Aug. 2026')
    cur_y -= 11
    add_text('F2', 8.5, 46, cur_y, '- Co-founded a clinical trial matching platform integrating IBM watsonx.ai and ClinicalTrials.gov REST APIs.')
    cur_y -= 10
    add_text('F2', 8.5, 46, cur_y, '- Developed patient-profile parsing and multi-criteria evaluation algorithms generating explainable match rationales.')
    cur_y -= 14

    # Break Through Tech
    add_text('F1', 9.5, 36, cur_y, 'Break Through Tech')
    add_text('F2', 9, 520, cur_y, 'National')
    cur_y -= 11
    add_text('F3', 9, 36, cur_y, 'AI Fellow')
    add_text('F2', 9, 478, cur_y, 'May 2026 - Present')
    cur_y -= 11
    add_text('F2', 8.5, 46, cur_y, '- Selected among 4,300+ applicants for a 12-month fellowship in machine learning, deep learning, and scalable systems.')
    cur_y -= 16

    # Section: PROJECTS
    add_text('F1', 10, 36, cur_y, 'FEATURED PROJECTS')
    add_line(36, cur_y - 2, 576, cur_y - 2, 0.5, 0.6, 0.6, 0.6)
    cur_y -= 13
    
    # AGENTIS Project
    add_text('F1', 9, 36, cur_y, 'AGENTIS - AI Clinical Trial Matching Platform')
    add_text('F2', 8.5, 335, cur_y, 'IBM watsonx.ai, Python, FastAPI, ClinicalTrials.gov API')
    cur_y -= 10
    add_text('F2', 8.5, 46, cur_y, '- Multi-agent system evaluating clinical eligibility criteria with explainable scoring for clinical research coordinators.')
    cur_y -= 13

    # AutoPilot AI
    add_text('F1', 9, 36, cur_y, 'AutoPilot AI - Autonomous Auto Repair Advisor')
    add_text('F2', 8.5, 310, cur_y, 'NVIDIA Nemotron, Holo Agent, Next.js 16, TypeScript, Docker')
    cur_y -= 10
    add_text('F2', 8.5, 46, cur_y, '- Built an end-to-end multi-agent service advisor automating repair workflows with human-in-the-loop validation.')
    cur_y -= 13

    # Acron
    add_text('F1', 9, 36, cur_y, 'Acron - Semantic Codebase Knowledge Base')
    add_text('F2', 8.5, 320, cur_y, 'Python, Flask, sqlite-vec, SentenceTransformers, Tree-sitter')
    cur_y -= 10
    add_text('F2', 8.5, 46, cur_y, '- Local-first semantic code search embedding repository code with AST-aware chunking and vector similarity retrieval.')
    cur_y -= 13

    # ContextMeter
    add_text('F1', 9, 36, cur_y, 'ContextMeter - AI Agent Context Observability')
    add_text('F2', 8.5, 345, cur_y, 'TypeScript, Express, React, Vite, Gemini API, Zod')
    cur_y -= 10
    add_text('F2', 8.5, 46, cur_y, '- Real-time context degradation and token optimization suite for multi-turn LLM pipelines with structured schema validation.')
    cur_y -= 16

    # Section: SKILLS
    add_text('F1', 10, 36, cur_y, 'TECHNICAL SKILLS')
    add_line(36, cur_y - 2, 576, cur_y - 2, 0.5, 0.6, 0.6, 0.6)
    cur_y -= 13
    
    add_text('F1', 8.5, 36, cur_y, 'Languages: ')
    add_text('F2', 8.5, 95, cur_y, 'Python, Java, C++, SQL, R, TypeScript, HTML/CSS')
    cur_y -= 11
    
    add_text('F1', 8.5, 36, cur_y, 'Frameworks: ')
    add_text('F2', 8.5, 95, cur_y, 'PyTorch, TensorFlow, Scikit-learn, SentenceTransformers, FastAPI, Flask, Express, React, Next.js')
    cur_y -= 11
    
    add_text('F1', 8.5, 36, cur_y, 'Tools & Infra: ')
    add_text('F2', 8.5, 95, cur_y, 'Docker, Kubernetes, Ansible, Git, GitHub, PostgreSQL, MySQL, SQLite, sqlite-vec, Linux')
    
    stream_content = '\n'.join(content_stream)
    stream_len = len(stream_content.encode('latin1'))
    
    pdf = f'''%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 612 792]
  /Resources <<
    /Font <<
      /F1 4 0 R
      /F2 5 0 R
      /F3 6 0 R
    >>
  >>
  /Contents 7 0 R
>>
endobj
4 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
6 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Oblique
>>
endobj
7 0 obj
<<
  /Length {stream_len}
>>
stream
{stream_content}
endstream
endobj
xref
0 8
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000000347 00000 n 
0000000423 00000 n 
0000000507 00000 n 
trailer
<<
  /Size 8
  /Root 1 0 R
>>
startxref
{507 + stream_len + 50}
%%EOF'''

    with open(filename, 'wb') as f:
        f.write(pdf.encode('latin1'))
    print('Generated PDF successfully')

if __name__ == '__main__':
    make_pdf('public/resume.pdf')
