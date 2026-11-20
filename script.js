const DEFAULT_DATA = {
    clients: [
        { id: "c1", name: "Apex Industrial Corp", type: "Corporate", email: "legal@apexindustrial.com", phone: "(312) 555-0192", company: "Apex Industrial Corp", intake: "2025-10-14", notes: "Key corporate account. Net-30 billing terms. Primary contact: CEO Marcus Sterling." },
        { id: "c2", name: "Sarah Jenkins", type: "Individual", email: "s.jenkins@gmail.com", phone: "(415) 555-8391", company: "Self-Employed", intake: "2026-01-10", notes: "Family trust restructuring and estate probate matter." },
        { id: "c3", name: "Vanguard Tech Labs", type: "Corporate", email: "ip@vanguardtech.io", phone: "(650) 555-9021", company: "Vanguard Tech Labs", intake: "2025-11-28", notes: "AI patent portfolio protection and licensing agreements." },
        { id: "c4", name: "Eleanor Vance", type: "Individual", email: "evance@seattlemail.com", phone: "(206) 555-4920", company: "Vance Consulting", intake: "2026-02-04", notes: "Commercial real estate lease dispute." },
        { id: "c5", name: "BioHealth Diagnostics", type: "Corporate", email: "compliance@biohealthdx.com", phone: "(617) 555-3819", company: "BioHealth Diagnostics", intake: "2025-08-15", notes: "Regulatory compliance and FDA IP litigation." }
    ],
    cases: [
        { id: "CS-101", number: "CIV-2026-012", title: "Apex Industrial v. Titan Logistics", practice: "Civil Litigation", clientId: "c1", attorney: "Jonathan Davis, Esq.", opposing: "Vance & Associates (Marcus Vance)", priority: "High", stage: "Discovery", notes: "Breach of contract regarding warehouse supply chain deliveries.", createdAt: "2026-01-15" },
        { id: "CS-102", number: "CORP-2026-044", title: "Vanguard Tech Patent Portfolio Restructure", practice: "Intellectual Property", clientId: "c3", attorney: "Elena Rostova, Esq.", opposing: "None (Transactional)", priority: "Medium", stage: "Motions/Pre-Trial", notes: "Securing international utility patents for neural processing chips.", createdAt: "2025-12-10" },
        { id: "CS-103", number: "FAM-2026-009", title: "In Re Estate of Arthur Jenkins", practice: "Family Law", clientId: "c2", attorney: "Jonathan Davis, Esq.", opposing: "Independent Counsel for Beneficiaries", priority: "Urgent", stage: "Hearing/Trial", notes: "Contested probate and division of real estate holdings.", createdAt: "2026-01-18" },
        { id: "CS-104", number: "PROP-2026-055", title: "Vance Consulting Lease Enforcement", practice: "Civil Litigation", clientId: "c4", attorney: "Marcus Thorne, Esq.", opposing: "Metro Commercial Properties", priority: "Medium", stage: "Intake", notes: "Commercial lease default and retroactive CAM charges dispute.", createdAt: "2026-02-08" },
        { id: "CS-105", number: "IP-2025-091", title: "BioHealth Diagnostics NDA & Trade Secret", practice: "Intellectual Property", clientId: "c5", attorney: "Elena Rostova, Esq.", opposing: "Helix Gene Corp", priority: "High", stage: "Settlement/Judgment", notes: "Alleged misappropriation of diagnostic assay formulas.", createdAt: "2025-09-02" }
    ],
    hearings: [
        { id: "h1", caseId: "CS-101", title: "Motion to Compel Production of Documents", datetime: "2026-03-02T10:00", courtroom: "Hon. Judge Robert Chen, Courtroom 402", prepStatus: "Ready / Prepared" },
        { id: "h2", caseId: "CS-103", title: "Probate Court Evidentiary Hearing", datetime: "2026-03-04T13:30", courtroom: "Hon. Magistrate Sarah Lin, Probate Court 2B", prepStatus: "In Progress" },
        { id: "h3", caseId: "CS-105", title: "Settlement Conference & Mediation", datetime: "2026-03-06T09:00", courtroom: "Alternative Dispute Resolution Center, Rm 3", prepStatus: "Ready / Prepared" },
        { id: "h4", caseId: "CS-102", title: "Patent Examiner Interview & Claim Review", datetime: "2026-03-12T11:00", courtroom: "USPTO Video Hearing Room 8", prepStatus: "Not Started" }
    ],
    tasks: [
        { id: "t1", caseId: "CS-101", title: "Review deposition transcripts of CFO", dueDate: "2026-03-01", priority: "High", assignee: "Jonathan Davis, Esq.", completed: false },
        { id: "t2", caseId: "CS-103", title: "Finalize asset inventory schedule C", dueDate: "2026-03-03", priority: "Urgent", assignee: "Jonathan Davis, Esq.", completed: false },
        { id: "t3", caseId: "CS-102", title: "Draft patent office action response brief", dueDate: "2026-03-10", priority: "Medium", assignee: "Elena Rostova, Esq.", completed: true },
        { id: "t4", caseId: "CS-104", title: "Draft initial demand letter & lease audit", dueDate: "2026-02-28", priority: "High", assignee: "Marcus Thorne, Esq.", completed: false },
        { id: "t5", caseId: "CS-105", title: "Review proposed settlement consent decree", dueDate: "2026-03-05", priority: "Urgent", assignee: "Elena Rostova, Esq.", completed: false }
    ],
    documents: [
        { id: "d1", caseId: "CS-101", title: "Master Supply Agreement 2024.pdf", category: "Contracts", uploadDate: "2026-01-16", status: "Filed", fileType: "PDF" },
        { id: "d2", caseId: "CS-101", title: "Plaintiff Complaint for Damages.pdf", category: "Pleadings", uploadDate: "2026-01-15", status: "Filed", fileType: "PDF" },
        { id: "d3", caseId: "CS-103", title: "Last Will and Testament_ArthurJenkins.pdf", category: "Evidence", uploadDate: "2026-01-19", status: "Reviewed", fileType: "PDF" },
        { id: "d4", caseId: "CS-102", title: "Neural Processing Patent Spec_Draft3.docx", category: "Contracts", uploadDate: "2026-02-01", status: "Draft", fileType: "DOCX" },
        { id: "d5", caseId: "CS-105", title: "Settlement Agreement Terms Sheet.pdf", category: "Correspondence", uploadDate: "2026-02-14", status: "Reviewed", fileType: "PDF" }
    ],
    activities: [
        { id: "a1", caseId: "CS-101", text: "Case stage updated from Intake to Discovery", date: "2026-01-20", type: "stage" },
        { id: "a2", caseId: "CS-101", text: "Document uploaded: Plaintiff Complaint for Damages.pdf", date: "2026-01-15", type: "document" },
        { id: "a3", caseId: "CS-103", text: "Hearing scheduled: Probate Court Evidentiary Hearing", date: "2026-01-22", type: "hearing" },
        { id: "a4", caseId: "CS-102", text: "Task completed: Draft patent office action response brief", date: "2026-02-10", type: "task" }
    ]
};

const STAGES = ["Intake", "Discovery", "Motions/Pre-Trial", "Hearing/Trial", "Settlement/Judgment", "Closed"];
let appData = {}, currentTab = 'dashboard', activeCaseId = null, activeClientId = null, workspaceTab = 'timeline', searchQuery = '';

const $ = id => document.getElementById(id);
const today = () => new Date().toISOString().split('T')[0];
const saveStorage = () => localStorage.setItem('jurisflow_data_v2', JSON.stringify(appData));
const logActivity = (caseId, text, type) => appData.activities.unshift({ id: 'act-' + Math.random(), caseId, text, date: today(), type });

function initStorage() {
    try {
        appData = JSON.parse(localStorage.getItem('jurisflow_data_v2')) || JSON.parse(JSON.stringify(DEFAULT_DATA));
    } catch {
        appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
    saveStorage();
}

function resetDemoData() {
    if (confirm("Reset all data back to original seed cases and records?")) {
        appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
        saveStorage();
        showToast("Application data reset to seed state.");
        renderCurrentTab();
    }
}

function showToast(msg, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'error' : ''}`;
    toast.innerHTML = `<i class="fa-solid ${type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check text-accent'}"></i><span>${msg}</span>`;
    $('toast-container').appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3200);
}

function openModal(id, presetCaseId = null) {
    $('case-client').innerHTML = appData.clients.map(c => `<option value="${c.id}">${c.name} (${c.company || 'Individual'})</option>`).join('');
    ['hearing-case', 'task-case', 'doc-case'].forEach(sel => {
        $(sel).innerHTML = appData.cases.map(cs => `<option value="${cs.id}">[${cs.number}] ${cs.title}</option>`).join('');
        if (presetCaseId) $(sel).value = presetCaseId;
    });
    $(id).classList.remove('hidden');
}

const closeModal = id => $(id).classList.add('hidden');

function switchTab(tab) {
    currentTab = tab;
    activeCaseId = activeClientId = null;
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    renderCurrentTab();
}

function handleGlobalSearch(q) {
    searchQuery = q.toLowerCase().trim();
    renderCurrentTab();
}

function renderCurrentTab() {
    const view = $('main-view-container');
    if (activeCaseId) return view.innerHTML = renderCaseWorkspace(activeCaseId);
    if (activeClientId) return view.innerHTML = renderClientDetail(activeClientId);
    const views = { dashboard: renderDashboard, cases: renderCases, clients: renderClients, hearings: renderHearings, tasks: renderTasks };
    view.innerHTML = (views[currentTab] || renderDashboard)();
}

function renderDashboard() {
    const activeCount = appData.cases.filter(c => c.stage !== 'Closed').length;
    const overdueCount = appData.tasks.filter(t => !t.completed && new Date(t.dueDate) < new Date()).length;
    const pendingCount = appData.tasks.filter(t => !t.completed).length;
    const counts = STAGES.map(st => appData.cases.filter(c => c.stage === st).length);
    const maxCount = Math.max(...counts, 1);

    return `<div class="container-max">
        <div class="hero-banner">
            <div>
                <span class="hero-badge">Firm Command Center</span>
                <h1 class="hero-title">Welcome back, Jonathan</h1>
                <p class="hero-desc">You have <strong class="text-accent">${appData.hearings.length} hearings</strong> scheduled and <strong class="text-amber">${overdueCount} overdue tasks</strong> requiring attention.</p>
            </div>
            <div class="flex-center">
                <button onclick="openModal('new-hearing-modal')" class="btn btn-glass"><i class="fa-solid fa-calendar-plus"></i><span>Schedule Hearing</span></button>
                <button onclick="openModal('new-task-modal')" class="btn btn-primary"><i class="fa-solid fa-plus"></i><span>Add Task</span></button>
            </div>
        </div>

        <div class="kpi-grid">
            <div class="kpi-card"><div><p class="kpi-label">Active Cases</p><h3 class="kpi-value">${activeCount}</h3><p class="kpi-trend blue"><i class="fa-solid fa-arrow-trend-up"></i> +2 from last month</p></div><div class="kpi-icon blue"><i class="fa-solid fa-briefcase"></i></div></div>
            <div class="kpi-card"><div><p class="kpi-label">Hearings This Week</p><h3 class="kpi-value">${appData.hearings.length}</h3><p class="kpi-trend emerald"><i class="fa-solid fa-calendar-check"></i> On schedule</p></div><div class="kpi-icon emerald"><i class="fa-solid fa-scale-balanced"></i></div></div>
            <div class="kpi-card"><div><p class="kpi-label">Overdue Tasks</p><h3 class="kpi-value danger">${overdueCount}</h3><p class="kpi-trend red"><i class="fa-solid fa-triangle-exclamation"></i> Action required</p></div><div class="kpi-icon red"><i class="fa-solid fa-circle-exclamation"></i></div></div>
            <div class="kpi-card"><div><p class="kpi-label">Upcoming Deadlines</p><h3 class="kpi-value">${pendingCount}</h3><p class="kpi-trend blue"><i class="fa-solid fa-clock"></i> Next 14 days</p></div><div class="kpi-icon indigo"><i class="fa-solid fa-hourglass-half"></i></div></div>
        </div>

        <div class="dashboard-split">
            <div class="card">
                <div class="flex-between" style="margin-bottom:1.5rem">
                    <h3 class="page-title" style="font-size:1rem"><i class="fa-solid fa-chart-bar text-blue"></i><span>Case Volume by Stage Pipeline</span></h3>
                    <span class="text-muted">Real-time stats</span>
                </div>
                <div class="stage-bar-list">
                    ${STAGES.map((st, i) => `<div>
                        <div class="stage-bar-meta"><span>${st}</span><strong>${counts[i]} cases</strong></div>
                        <div class="progress-track"><div class="progress-fill" style="width:${Math.max(Math.round((counts[i] / maxCount) * 100), 6)}%"></div></div>
                    </div>`).join('')}
                </div>
            </div>

            <div class="card">
                <div class="flex-between" style="margin-bottom:1rem">
                    <h3 class="page-title" style="font-size:1rem"><i class="fa-solid fa-bolt" style="color:var(--amber-500)"></i><span>At-a-Glance Feed</span></h3>
                    <span class="badge badge-amber">Urgent</span>
                </div>
                <div class="feed-list">
                    ${appData.hearings.slice(0, 3).map(h => {
                        const cs = appData.cases.find(c => c.id === h.caseId);
                        return `<div onclick="openCase('${h.caseId}')" class="feed-item">
                            <div class="flex-between text-blue" style="font-size:0.75rem;font-weight:600;margin-bottom:4px"><span><i class="fa-solid fa-scale-balanced"></i> Hearing</span><span>${h.datetime.replace('T', ' ')}</span></div>
                            <strong style="font-size:0.75rem;display:block">${h.title}</strong>
                            <span class="text-muted">${cs ? cs.title : ''}</span>
                        </div>`;
                    }).join('')}
                    ${appData.tasks.filter(t => !t.completed).slice(0, 2).map(t => {
                        const cs = appData.cases.find(c => c.id === t.caseId);
                        return `<div onclick="openCase('${t.caseId}')" class="feed-item">
                            <div class="flex-between text-red" style="font-size:0.75rem;font-weight:600;margin-bottom:4px"><span><i class="fa-solid fa-triangle-exclamation"></i> Due ${t.dueDate}</span><span>${t.priority}</span></div>
                            <strong style="font-size:0.75rem;display:block">${t.title}</strong>
                            <span class="text-muted">${cs ? cs.title : ''}</span>
                        </div>`;
                    }).join('')}
                </div>
            </div>
        </div>
    </div>`;
}

function renderClients() {
    const list = appData.clients.filter(c => !searchQuery || [c.name, c.company, c.email].some(v => (v || '').toLowerCase().includes(searchQuery)));
    return `<div class="container-max">
        <div class="page-header-card">
            <div><h1 class="page-title"><i class="fa-solid fa-users text-blue"></i><span>Client Directory</span></h1><p class="page-subtitle">Manage individual and corporate client profiles, communication notes, and linked matters.</p></div>
            <button onclick="openModal('new-client-modal')" class="btn btn-primary"><i class="fa-solid fa-user-plus"></i><span>Add New Client</span></button>
        </div>
        <div class="cards-grid-3">
            ${list.map(c => {
                const count = appData.cases.filter(cs => cs.clientId === c.id).length;
                return `<div class="client-card">
                    <div>
                        <div class="flex-between" style="align-items:flex-start;margin-bottom:0.75rem">
                            <div class="flex-center">
                                <div class="client-avatar">${c.name.slice(0, 2).toUpperCase()}</div>
                                <div><h3 onclick="activeClientId='${c.id}';renderCurrentTab()" class="clickable" style="font-size:1rem">${c.name}</h3><span class="badge ${c.type === 'Corporate' ? 'badge-indigo' : 'badge-emerald'}">${c.type}</span></div>
                            </div>
                            <div>
                                <button onclick="editClient('${c.id}')" class="btn-icon" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button onclick="deleteItem('clients','${c.id}','Client deleted.')" class="btn-icon danger" title="Delete"><i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                        <div style="border-top:1px solid var(--slate-100);padding-top:1rem;margin-top:1rem;display:flex;flex-direction:column;gap:0.5rem;font-size:0.75rem">
                            <div><i class="fa-solid fa-building text-muted" style="width:16px"></i> <strong>${c.company || 'N/A'}</strong></div>
                            <div><i class="fa-solid fa-envelope text-muted" style="width:16px"></i> ${c.email}</div>
                            <div><i class="fa-solid fa-phone text-muted" style="width:16px"></i> ${c.phone}</div>
                            <div><i class="fa-solid fa-calendar-days text-muted" style="width:16px"></i> Intake: ${c.intake}</div>
                        </div>
                    </div>
                    <div class="flex-between" style="border-top:1px solid var(--slate-100);padding-top:1rem;margin-top:1.25rem">
                        <span class="text-muted"><i class="fa-solid fa-briefcase text-blue"></i> ${count} Linked Cases</span>
                        <button onclick="activeClientId='${c.id}';renderCurrentTab()" class="btn-icon primary" style="font-size:0.75rem;font-weight:600">View Profile <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>`;
            }).join('')}
        </div>
    </div>`;
}

function renderClientDetail(id) {
    const c = appData.clients.find(x => x.id === id);
    if (!c) return renderClients();
    const linked = appData.cases.filter(cs => cs.clientId === id);
    return `<div class="container-max">
        <div class="page-header-card">
            <div class="flex-center">
                <button onclick="activeClientId=null;renderCurrentTab()" class="btn btn-soft"><i class="fa-solid fa-arrow-left"></i></button>
                <div><div class="flex-center"><h1 class="page-title">${c.name}</h1><span class="badge badge-blue">${c.type}</span></div><p class="page-subtitle">${c.company || ''} • Intake Date: ${c.intake}</p></div>
            </div>
            <button onclick="editClient('${c.id}')" class="btn btn-soft">Edit Profile</button>
        </div>
        <div class="dashboard-split" style="grid-template-columns:1fr 2fr">
            <div class="card" style="display:flex;flex-direction:column;gap:0.875rem">
                <h3 class="form-label">Contact &amp; Billing Details</h3>
                <div><span class="form-label">Email</span><p style="font-size:0.875rem;font-weight:500">${c.email}</p></div>
                <div><span class="form-label">Phone</span><p style="font-size:0.875rem;font-weight:500">${c.phone}</p></div>
                <div><span class="form-label">Organization</span><p style="font-size:0.875rem;font-weight:500">${c.company || 'N/A'}</p></div>
                <div><span class="form-label">Notes</span><p class="feed-item" style="font-size:0.75rem;cursor:default">${c.notes || 'No notes recorded.'}</p></div>
            </div>
            <div class="card">
                <h3 class="form-label" style="margin-bottom:1rem">Associated Cases (${linked.length})</h3>
                <div style="display:flex;flex-direction:column;gap:0.75rem">
                    ${linked.length ? linked.map(cs => `<div onclick="openCase('${cs.id}')" class="feed-item flex-between">
                        <div><span class="font-mono text-blue" style="font-size:0.75rem;font-weight:700">${cs.number}</span> <span class="badge badge-slate">${cs.stage}</span><h4 style="font-size:0.875rem;margin-top:4px">${cs.title}</h4><p class="text-muted">Practice: ${cs.practice} • Attorney: ${cs.attorney}</p></div>
                        <i class="fa-solid fa-chevron-right text-muted"></i>
                    </div>`).join('') : '<p class="text-muted">No linked cases found.</p>'}
                </div>
            </div>
        </div>
    </div>`;
}

function renderCases() {
    const list = appData.cases.filter(c => !searchQuery || [c.title, c.number, c.practice, c.attorney].some(v => v.toLowerCase().includes(searchQuery)));
    return `<div class="container-max">
        <div class="page-header-card">
            <div><h1 class="page-title"><i class="fa-solid fa-briefcase text-blue"></i><span>Case Files &amp; Pipeline</span></h1><p class="page-subtitle">Structured case records, practice areas, priority levels, and interactive stage pipeline updates.</p></div>
            <button onclick="openModal('new-case-modal')" class="btn btn-primary"><i class="fa-solid fa-plus"></i><span>Create New Case</span></button>
        </div>
        <div class="table-wrapper">
            <table class="data-table">
                <thead><tr><th>Case ID / Title</th><th>Client</th><th>Practice Area</th><th>Assigned Attorney</th><th>Priority</th><th>Stage Pipeline</th><th style="text-align:right">Actions</th></tr></thead>
                <tbody>
                    ${list.map(cs => {
                        const cl = appData.clients.find(c => c.id === cs.clientId);
                        const pBadge = cs.priority === 'Urgent' ? 'badge-red' : cs.priority === 'High' ? 'badge-amber' : 'badge-blue';
                        return `<tr>
                            <td><span onclick="openCase('${cs.id}')" class="font-mono text-blue clickable" style="font-size:0.75rem;font-weight:700;display:block">${cs.number}</span><strong onclick="openCase('${cs.id}')" class="clickable" style="color:var(--slate-900)">${cs.title}</strong></td>
                            <td><strong>${cl ? cl.name : 'Unknown'}</strong></td>
                            <td>${cs.practice}</td>
                            <td>${cs.attorney}</td>
                            <td><span class="badge ${pBadge}">${cs.priority}</span></td>
                            <td><select onchange="updateCaseStage('${cs.id}',this.value)" class="stage-select">${STAGES.map(s => `<option value="${s}" ${cs.stage === s ? 'selected' : ''}>${s}</option>`).join('')}</select></td>
                            <td style="text-align:right;white-space:nowrap">
                                <button onclick="openCase('${cs.id}')" class="btn-icon primary" title="Open"><i class="fa-solid fa-folder-open"></i></button>
                                <button onclick="editCase('${cs.id}')" class="btn-icon" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button onclick="deleteCase('${cs.id}')" class="btn-icon danger" title="Delete"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>`;
                    }).join('')}
                </tbody>
            </table>
        </div>
    </div>`;
}

function openCase(id) {
    activeCaseId = id;
    workspaceTab = 'timeline';
    renderCurrentTab();
}

function renderCaseWorkspace(id) {
    const cs = appData.cases.find(c => c.id === id);
    if (!cs) return renderCases();
    const cl = appData.clients.find(c => c.id === cs.clientId);
    const hearings = appData.hearings.filter(h => h.caseId === id);
    const tasks = appData.tasks.filter(t => t.caseId === id);
    const docs = appData.documents.filter(d => d.caseId === id);
    const acts = appData.activities.filter(a => a.caseId === id);
    const curIdx = STAGES.indexOf(cs.stage);

    return `<div class="container-max">
        <div class="page-header-card">
            <div class="flex-center">
                <button onclick="activeCaseId=null;renderCurrentTab()" class="btn btn-soft"><i class="fa-solid fa-arrow-left"></i></button>
                <div>
                    <div class="flex-center"><span class="badge badge-blue font-mono">${cs.number}</span><span class="badge badge-slate">${cs.practice}</span></div>
                    <h1 class="page-title" style="font-size:1.5rem;margin-top:4px">${cs.title}</h1>
                    <p class="page-subtitle">Client: <strong>${cl ? cl.name : 'N/A'}</strong> • Lead Attorney: <strong>${cs.attorney}</strong></p>
                </div>
            </div>
            <div class="flex-center">
                <button onclick="openModal('new-hearing-modal','${cs.id}')" class="btn btn-soft"><i class="fa-solid fa-calendar-plus"></i><span>Add Hearing</span></button>
                <button onclick="openModal('new-task-modal','${cs.id}')" class="btn btn-soft"><i class="fa-solid fa-list-check"></i><span>Add Task</span></button>
                <button onclick="openModal('new-doc-modal','${cs.id}')" class="btn btn-primary"><i class="fa-solid fa-file-arrow-up"></i><span>Upload Doc</span></button>
            </div>
        </div>

        <div class="card">
            <div class="flex-between" style="margin-bottom:1rem"><h3 class="form-label">Case Stage Pipeline</h3><span class="badge badge-blue">Current Stage: ${cs.stage}</span></div>
            <div class="stepper-grid">
                ${STAGES.map((st, idx) => `<div onclick="updateCaseStage('${cs.id}','${st}')" class="step-box ${st === cs.stage ? 'current' : idx < curIdx ? 'passed' : ''}">
                    <span style="display:block;font-size:10px;font-weight:700;text-transform:uppercase;opacity:0.8">Stage 0${idx + 1}</span>
                    <strong style="font-size:0.75rem;display:block;margin-top:4px">${st}</strong>
                </div>`).join('')}
            </div>
        </div>

        <div class="table-wrapper">
            <div class="tabs-bar">
                ${[['timeline', 'fa-timeline', `Timeline Activity (${acts.length})`], ['documents', 'fa-folder-open', `Documents (${docs.length})`], ['hearings', 'fa-scale-balanced', `Hearings (${hearings.length})`], ['tasks', 'fa-list-check', `Tasks & Deadlines (${tasks.length})`]]
                    .map(([key, icon, label]) => `<button onclick="workspaceTab='${key}';renderCurrentTab()" class="tab-btn ${workspaceTab === key ? 'active' : ''}"><i class="fa-solid ${icon}"></i> ${label}</button>`).join('')}
            </div>
            <div style="padding:1.5rem">
                ${workspaceTab === 'timeline' ? `<div class="timeline-list">${acts.length ? acts.map(a => `<div class="timeline-item"><div class="timeline-dot"></div><div class="feed-item" style="cursor:default"><div class="flex-between text-muted" style="margin-bottom:4px"><strong class="text-blue" style="text-transform:uppercase">${a.type}</strong><span>${a.date}</span></div><p style="font-size:0.875rem;font-weight:500">${a.text}</p></div></div>`).join('') : '<p class="text-muted">No recorded activities yet.</p>'}</div>` : ''}
                ${workspaceTab === 'documents' ? `<div class="cards-grid-3">${docs.length ? docs.map(d => `<div class="row-item"><div><strong style="font-size:0.875rem;display:block">${d.title}</strong><span class="text-muted">${d.category} • ${d.uploadDate}</span></div><div class="flex-center"><span class="badge ${d.status === 'Filed' ? 'badge-emerald' : d.status === 'Reviewed' ? 'badge-blue' : 'badge-amber'}">${d.status}</span><button onclick="deleteItem('documents','${d.id}','Document removed.')" class="btn-icon danger"><i class="fa-solid fa-trash"></i></button></div></div>`).join('') : '<p class="text-muted">No documents uploaded.</p>'}</div>` : ''}
                ${workspaceTab === 'hearings' ? `<div style="display:flex;flex-direction:column;gap:0.75rem">${hearings.length ? hearings.map(h => `<div class="row-item"><div><span class="text-blue" style="font-size:0.75rem;font-weight:600">${h.datetime.replace('T', ' ')} • ${h.courtroom}</span><strong style="font-size:0.875rem;display:block;margin:2px 0">${h.title}</strong><span class="text-muted">Prep: ${h.prepStatus}</span></div><button onclick="deleteItem('hearings','${h.id}','Hearing removed.')" class="btn-icon danger"><i class="fa-solid fa-trash"></i></button></div>`).join('') : '<p class="text-muted">No hearings scheduled.</p>'}</div>` : ''}
                ${workspaceTab === 'tasks' ? `<div style="display:flex;flex-direction:column;gap:0.75rem">${tasks.length ? tasks.map(t => `<div class="row-item ${t.completed ? 'completed' : ''}"><div class="flex-center"><input type="checkbox" ${t.completed ? 'checked' : ''} onchange="toggleTask('${t.id}')"><div><strong class="${t.completed ? 'line-through' : ''}" style="font-size:0.875rem;display:block">${t.title}</strong><span class="text-muted">Due: ${t.dueDate} • ${t.assignee} • ${t.priority}</span></div></div><button onclick="deleteItem('tasks','${t.id}','Task deleted.')" class="btn-icon danger"><i class="fa-solid fa-trash"></i></button></div>`).join('') : '<p class="text-muted">No tasks created.</p>'}</div>` : ''}
            </div>
        </div>
    </div>`;
}

function renderHearings() {
    const list = appData.hearings.filter(h => !searchQuery || [h.title, h.courtroom].some(v => v.toLowerCase().includes(searchQuery)));
    return `<div class="container-max">
        <div class="page-header-card">
            <div><h1 class="page-title"><i class="fa-solid fa-calendar-days text-blue"></i><span>Master Hearing Schedule</span></h1><p class="page-subtitle">Firm-wide court appearances, deposition sessions, and mediation timelines.</p></div>
            <button onclick="openModal('new-hearing-modal')" class="btn btn-primary"><i class="fa-solid fa-calendar-plus"></i><span>Schedule Hearing</span></button>
        </div>
        <div class="card" style="display:flex;flex-direction:column;gap:0.75rem">
            ${list.map(h => {
                const cs = appData.cases.find(c => c.id === h.caseId);
                return `<div class="row-item">
                    <div>
                        <div class="flex-center text-blue" style="font-size:0.75rem;font-weight:600;margin-bottom:4px"><span><i class="fa-solid fa-calendar-days"></i> ${h.datetime.replace('T', ' ')}</span><span class="badge badge-blue">${cs ? cs.practice : 'Legal'}</span></div>
                        <strong style="font-size:1rem;display:block">${h.title}</strong>
                        <p class="text-muted">Case: <strong class="clickable" onclick="openCase('${h.caseId}')">${cs ? cs.title : 'N/A'}</strong> • Courtroom: <strong>${h.courtroom}</strong></p>
                    </div>
                    <div class="flex-center"><span class="badge badge-emerald">${h.prepStatus}</span><button onclick="openCase('${h.caseId}')" class="btn btn-primary btn-sm">Open Case</button></div>
                </div>`;
            }).join('')}
        </div>
    </div>`;
}

function renderTasks() {
    const list = appData.tasks.filter(t => !searchQuery || [t.title, t.assignee].some(v => v.toLowerCase().includes(searchQuery)));
    return `<div class="container-max">
        <div class="page-header-card">
            <div><h1 class="page-title"><i class="fa-solid fa-square-check text-blue"></i><span>Master Tasks &amp; Deadlines</span></h1><p class="page-subtitle">Track actionable checklists, attorney assignments, and hard statutory deadlines across all matters.</p></div>
            <button onclick="openModal('new-task-modal')" class="btn btn-primary"><i class="fa-solid fa-plus"></i><span>Add New Task</span></button>
        </div>
        <div class="card" style="display:flex;flex-direction:column;gap:0.75rem">
            ${list.map(t => {
                const cs = appData.cases.find(c => c.id === t.caseId);
                const overdue = !t.completed && new Date(t.dueDate) < new Date();
                return `<div class="row-item ${t.completed ? 'completed' : ''}">
                    <div class="flex-center">
                        <input type="checkbox" ${t.completed ? 'checked' : ''} onchange="toggleTask('${t.id}')">
                        <div>
                            <strong class="${t.completed ? 'line-through' : ''}" style="font-size:0.875rem;display:block">${t.title}</strong>
                            <p class="text-muted">Case: <strong class="clickable" onclick="openCase('${t.caseId}')">${cs ? cs.title : ''}</strong> • Due: <span class="${overdue ? 'text-red' : ''}">${t.dueDate}</span> • Assignee: ${t.assignee}</p>
                        </div>
                    </div>
                    <div class="flex-center">
                        <span class="badge ${t.priority === 'Urgent' ? 'badge-red' : 'badge-blue'}">${t.priority}</span>
                        <button onclick="deleteItem('tasks','${t.id}','Task deleted.')" class="btn-icon danger"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>`;
            }).join('')}
        </div>
    </div>`;
}

function deleteItem(collection, id, msg) {
    appData[collection] = appData[collection].filter(x => x.id !== id);
    saveStorage();
    showToast(msg);
    renderCurrentTab();
}

function deleteCase(id) {
    if (confirm("Delete this case file and all associated records?")) {
        ['cases', 'hearings', 'tasks', 'documents'].forEach(k => appData[k] = appData[k].filter(x => (x.caseId || x.id) !== id));
        saveStorage();
        showToast("Case file deleted.");
        renderCurrentTab();
    }
}

function updateCaseStage(id, stage) {
    const cs = appData.cases.find(c => c.id === id);
    if (cs && cs.stage !== stage) {
        logActivity(id, `Case stage updated from ${cs.stage} to ${stage}`, 'stage');
        cs.stage = stage;
        saveStorage();
        showToast(`Case stage updated to ${stage}`);
        renderCurrentTab();
    }
}

function toggleTask(id) {
    const t = appData.tasks.find(x => x.id === id);
    if (t) {
        t.completed = !t.completed;
        saveStorage();
        showToast(t.completed ? "Task marked completed" : "Task marked active");
        renderCurrentTab();
    }
}

function handleCaseSubmit(e) {
    e.preventDefault();
    const editId = $('case-edit-id').value;
    const item = {
        id: editId || 'CS-' + Math.floor(100 + Math.random() * 900),
        number: $('case-num').value, title: $('case-title').value, practice: $('case-practice').value,
        clientId: $('case-client').value, attorney: $('case-attorney').value, opposing: $('case-opposing').value,
        priority: $('case-priority').value, stage: $('case-stage').value, notes: $('case-notes').value, createdAt: today()
    };
    if (editId) {
        appData.cases[appData.cases.findIndex(c => c.id === editId)] = item;
        showToast("Case file updated successfully.");
    } else {
        appData.cases.unshift(item);
        logActivity(item.id, `Case file created: ${item.title}`, 'stage');
        showToast("New case file created successfully.");
    }
    saveStorage(); closeModal('new-case-modal'); e.target.reset(); $('case-edit-id').value = ''; renderCurrentTab();
}

function editCase(id) {
    const cs = appData.cases.find(c => c.id === id);
    if (!cs) return;
    openModal('new-case-modal');
    $('case-edit-id').value = cs.id; $('case-num').value = cs.number; $('case-title').value = cs.title;
    $('case-practice').value = cs.practice; $('case-client').value = cs.clientId; $('case-attorney').value = cs.attorney;
    $('case-opposing').value = cs.opposing || ''; $('case-priority').value = cs.priority; $('case-stage').value = cs.stage;
    $('case-notes').value = cs.notes || '';
    $('case-modal-title').innerHTML = `<i class="fa-solid fa-briefcase text-accent"></i><span>Edit Case File</span>`;
}

function handleClientSubmit(e) {
    e.preventDefault();
    const editId = $('client-edit-id').value;
    const item = {
        id: editId || 'c-' + Math.floor(100 + Math.random() * 900),
        name: $('client-name').value, type: $('client-type').value, email: $('client-email').value,
        phone: $('client-phone').value, company: $('client-company').value, intake: $('client-intake').value, notes: $('client-notes').value
    };
    if (editId) {
        appData.clients[appData.clients.findIndex(c => c.id === editId)] = item;
        showToast("Client profile updated.");
    } else {
        appData.clients.unshift(item);
        showToast("New client added successfully.");
    }
    saveStorage(); closeModal('new-client-modal'); e.target.reset(); $('client-edit-id').value = ''; renderCurrentTab();
}

function editClient(id) {
    const c = appData.clients.find(x => x.id === id);
    if (!c) return;
    openModal('new-client-modal');
    $('client-edit-id').value = c.id; $('client-name').value = c.name; $('client-type').value = c.type;
    $('client-email').value = c.email; $('client-phone').value = c.phone; $('client-company').value = c.company || '';
    $('client-intake').value = c.intake; $('client-notes').value = c.notes || '';
    $('client-modal-title').innerHTML = `<i class="fa-solid fa-user-pen text-accent"></i><span>Edit Client Profile</span>`;
}

function handleHearingSubmit(e) {
    e.preventDefault();
    const item = { id: 'h-' + Math.random(), caseId: $('hearing-case').value, title: $('hearing-title').value, datetime: $('hearing-datetime').value, courtroom: $('hearing-courtroom').value, prepStatus: $('hearing-status').value };
    appData.hearings.unshift(item);
    logActivity(item.caseId, `Hearing scheduled: ${item.title}`, 'hearing');
    saveStorage(); closeModal('new-hearing-modal'); e.target.reset(); showToast("Hearing scheduled successfully."); renderCurrentTab();
}

function handleTaskSubmit(e) {
    e.preventDefault();
    const item = { id: 't-' + Math.random(), caseId: $('task-case').value, title: $('task-title').value, dueDate: $('task-due').value, priority: $('task-priority').value, assignee: $('task-assignee').value, completed: false };
    appData.tasks.unshift(item);
    logActivity(item.caseId, `Task added: ${item.title}`, 'task');
    saveStorage(); closeModal('new-task-modal'); e.target.reset(); showToast("Task created successfully."); renderCurrentTab();
}

function handleDocSubmit(e) {
    e.preventDefault();
    const file = $('doc-file-input').files[0];
    const fileName = file ? file.name : 'Exhibit_Document.pdf';
    const item = { id: 'd-' + Math.random(), caseId: $('doc-case').value, title: $('doc-title').value || fileName, category: $('doc-category').value, uploadDate: today(), status: $('doc-status').value, fileType: fileName.split('.').pop().toUpperCase() || 'PDF' };
    appData.documents.unshift(item);
    logActivity(item.caseId, `Document uploaded: ${item.title}`, 'document');
    saveStorage(); closeModal('new-doc-modal'); e.target.reset(); $('simulated-file-name').innerText = ''; showToast("Document uploaded successfully."); renderCurrentTab();
}

window.onload = () => { initStorage(); renderCurrentTab(); };
