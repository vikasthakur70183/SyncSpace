# SyncSpace Unified Design Brief for Stitch

## Purpose
Design SyncSpace as a modern cross-platform collaboration product for startup teams. This file is the shared master brief. Use it as the common brand and product reference for the separate web and mobile design briefs.

Separate focused briefs:
- [web-design-brief.md](/Users/vikasthakur/Documents/Projects/SyncSpace/web-design-brief.md)
- [app-design-brief.md](/Users/vikasthakur/Documents/Projects/SyncSpace/app-design-brief.md)

SyncSpace combines:
- realtime team chat
- workspace collaboration
- kanban-style task management
- online presence
- notifications
- lightweight team administration

The design should feel bold, creative, fast, and polished while still being credible for everyday team operations.

## Product Positioning
SyncSpace is a realtime team workspace for fast-moving startups that need communication and execution in one place. It should feel more energetic and alive than a typical enterprise dashboard, but more focused and practical than a social app.

The product should visually communicate:
- momentum
- teamwork
- clarity
- speed
- live activity
- trust and organization

Avoid making it look like:
- a generic white-label SaaS admin panel
- a crypto-style neon product
- a heavy enterprise ERP tool
- a casual social messaging app

## Primary Audience
Design for startup teams first:
- founders
- product managers
- designers
- engineers
- operations teammates

These users need to switch quickly between conversations, tasks, teammates, and workspace updates. The UI should support speed, clarity, and frequent context switching.

## Visual Direction
Use a bold creative productivity aesthetic.

Desired tone:
- modern and high-energy
- collaborative and human
- confident but not loud
- premium but approachable
- expressive without hurting usability

### Visual Style Guidelines
- Use strong visual hierarchy with distinctive section headers, card groupings, and layout depth.
- Prefer rich surfaces, layered panels, and subtle gradients over flat generic dashboards.
- Use color intentionally to separate communication, tasks, alerts, and workspace identity.
- Make realtime states visible through motion, status dots, subtle pulse states, unread indicators, and activity highlights.
- Use rounded corners, clean card geometry, and refined spacing.
- Support dense information on desktop without making it feel cramped.
- Keep mobile interfaces focused, stacked, and thumb-friendly.

### Suggested Color Direction
This is directional, not a strict brand lockup:
- Base neutrals: warm charcoal, soft slate, mist gray, off-white
- Primary accent: electric blue or vivid cyan for live collaboration energy
- Secondary accent: coral, amber, or tangerine for highlights and actions
- Success: modern green
- Warning: amber
- Error: warm red

Avoid overusing purple-heavy default startup palettes unless used sparingly as an accent.

### Typography Direction
- Use expressive but highly legible type.
- Headings should feel crisp and modern.
- Body text should be neutral and easy to scan.
- Support dense collaboration UI with clear weight differences between metadata, primary content, and status text.

## Cross-Platform Product Rules
- Web, iOS, and Android should share the same visual language, color system, icon style, and component behavior.
- Do not design web and mobile as separate brands.
- Adapt layout patterns to screen size while preserving the same mental model.
- Realtime events should feel consistent across platforms.
- Notifications, unread states, presence, and task updates should look related everywhere.

## Core Layout Model

### Web App Layout
Use a multi-panel productivity layout:
- Left sidebar for workspace switcher, main navigation, channels, DMs, and shortcuts
- Center panel for the primary active content such as dashboard, chat, or task board
- Optional right panel for task details, member info, thread replies, activity, or notification context

The desktop experience should feel powerful, efficient, and alive.

### Mobile App Layout
Use a focused mobile shell:
- Bottom tab navigation for core areas
- Stack-based drill-down flows for channels, DMs, tasks, notifications, and settings
- Context headers with quick actions
- Full-screen detail views instead of persistent side panels

Mobile should prioritize fast check-ins, messaging, and task updates while still supporting deeper admin and detail flows.

## UX Priorities
- Make realtime activity obvious
- Make switching between chat, tasks, and workspace context frictionless
- Keep the interface easy to scan at a glance
- Show who is online, where activity is happening, and what needs attention
- Let users take action from notifications and task states quickly
- Reduce visual noise even when many updates are happening
- Make empty states feel encouraging and guided

## Brand Personality Keywords
- alive
- collaborative
- fast
- organized
- expressive
- modern
- ambitious
- trustworthy

## Navigation Structure

### Primary Product Areas
- Home
- Channels
- Direct Messages
- Tasks
- Notifications
- Team / People
- Search / Command
- Profile / Settings

### Web Navigation Model
- Workspace switcher at upper left
- Main navigation in persistent sidebar
- Channels and DMs grouped beneath navigation
- Global create button for message, task, channel, or invite
- Search or command palette entry in top bar
- User profile and workspace settings accessible from persistent chrome

### Mobile Navigation Model
Use bottom tabs for:
- Home
- Chat
- Tasks
- Notifications
- You

Use stacked internal screens for:
- channel detail
- DM thread
- task detail
- team member detail
- workspace settings

## Screen And Page Inventory

Each screen below should be designed with:
- goal of the screen
- main layout zones
- primary actions
- realtime behaviors
- required elements/components
- responsive notes for web and mobile

---

## 1. Marketing / Landing Page (Web)

### Goal
Explain the product clearly, establish brand personality, and drive sign up or workspace creation.

### Main Layout Zones
- hero section
- product value section
- feature showcase
- multi-device preview section
- trust / collaboration proof section
- CTA footer

### Primary Actions
- start free
- sign in
- see product preview

### Key Elements
- bold hero headline
- short supporting copy
- primary CTA and secondary CTA
- mockup previews showing chat, kanban, and notifications together
- feature cards for chat, tasks, presence, and notifications
- visual proof of cross-platform support

### Responsive Notes
- Web should feel editorial and premium.
- Mobile browser version should stack sections cleanly and keep CTAs prominent.

---

## 2. Sign Up Screen

### Goal
Help a new user create an account quickly and confidently.

### Main Layout Zones
- brand panel or visual aside
- form panel
- trust or benefits support text

### Primary Actions
- create account
- continue with email
- optionally continue with Google or another provider if included later
- switch to sign in

### Realtime Behaviors
- immediate inline validation
- password strength or requirement feedback

### Required Elements
- email field
- name field
- password field
- confirm password if desired
- CTA button
- terms acknowledgement
- link to sign in

### Responsive Notes
- Desktop can use split-screen layout with branded visual panel.
- Mobile should use a simple focused form with sticky submit action when needed.

---

## 3. Sign In Screen

### Goal
Allow returning users to access their workspace quickly.

### Main Layout Zones
- compact auth shell
- form section
- session support links

### Primary Actions
- sign in
- forgot password
- switch to sign up

### Realtime Behaviors
- loading state on submit
- error message on failed auth
- session restore if user already has a valid cookie session

### Required Elements
- email field
- password field
- remember session language
- sign in CTA
- forgot password link
- sign up link

---

## 4. Forgot Password Screen

### Goal
Help users recover access without confusion.

### Main Layout Zones
- short explanation
- email recovery form
- confirmation state

### Primary Actions
- send reset link
- return to sign in

### Required Elements
- email input
- submit button
- success confirmation card
- resend option

---

## 5. Session Restore / App Loading Screen

### Goal
Handle startup smoothly while checking session state and restoring the user into the correct workspace.

### Main Layout Zones
- branded splash or loading shell
- progress messaging

### Required Elements
- logo or mark
- loading animation
- session restore text
- fallback error or retry state

### Responsive Notes
- Mobile splash can be more immersive.
- Web loading should be quick and minimal.

---

## 6. Onboarding Flow

### Goal
Get a new user into a useful collaborative workspace quickly.

### Steps
- welcome and product framing
- create workspace
- join existing workspace by invite or code
- invite teammates
- choose role or team type
- set up first channel

### Main Layout Zones
- progress header
- central task card or form
- optional contextual illustration

### Primary Actions
- continue
- skip invite
- create workspace
- join workspace

### Required Elements
- progress indicator
- workspace name input
- workspace avatar or icon picker
- invite email entry
- role selection cards
- success confirmation

### Responsive Notes
- Desktop can use stepper with side context.
- Mobile should keep steps short and one action per screen.

---

## 7. Workspace Home / Dashboard

### Goal
Give users an at-a-glance overview of activity, priorities, and team momentum.

### Main Layout Zones
- workspace header
- summary metrics or insight strip
- recent activity feed
- upcoming tasks panel
- active conversations panel
- online team section

### Primary Actions
- jump into channel
- open task board
- create task
- create channel
- invite teammate

### Realtime Behaviors
- live activity feed updates
- online members refresh
- unread counts change in place
- task due items update state

### Required Elements
- workspace title
- workspace switcher
- quick action buttons
- recent notifications summary
- team presence cluster
- task preview cards
- activity timeline
- pinned items or important links

### Responsive Notes
- Web dashboard can be modular with cards in a grid.
- Mobile dashboard should prioritize a vertical stack with the most urgent items first.

---

## 8. Channel List Screen

### Goal
Help users browse and enter workspace channels easily.

### Main Layout Zones
- channel groups
- pinned or favorite channels
- unread channels
- create or join actions

### Primary Actions
- open channel
- create channel
- mute or favorite channel

### Realtime Behaviors
- unread counts update live
- typing or active-channel indicators may appear subtly

### Required Elements
- channel rows
- unread badges
- muted state
- lock or visibility icon for private channels
- create channel CTA

### Responsive Notes
- On desktop this often lives inside the sidebar.
- On mobile it may also appear as a dedicated list screen within Chat.

---

## 9. Channel Chat Screen

### Goal
Provide a fast, polished realtime messaging experience inside a workspace channel.

### Main Layout Zones
- channel header
- message list
- thread entry points
- composer area
- optional member/activity side panel on web

### Primary Actions
- send message
- reply in thread
- react to message
- attach file
- mention teammate
- view channel info

### Realtime Behaviors
- messages appear instantly
- typing indicators
- online presence indicators
- unread separators
- read state changes
- reactions update live

### Required Elements
- channel name and description
- member avatars
- message bubbles or rows
- timestamps
- sender identity
- reactions
- reply count
- composer with rich input support
- emoji button
- attachment button
- send button
- typing indicator

### Responsive Notes
- Web can show thread or channel info in a right drawer/panel.
- Mobile should use full-screen chat with secondary screens for thread details and channel info.

---

## 10. Direct Messages Screen

### Goal
Support one-to-one and small-group private conversations with the same quality as channels.

### Main Layout Zones
- DM list
- active conversation
- profile or shared context panel on larger screens

### Primary Actions
- start new DM
- send message
- view member profile
- search messages

### Realtime Behaviors
- live online status
- typing indicators
- live unread counts
- last-seen metadata where appropriate

### Required Elements
- conversation list rows
- avatar stacks for group DMs
- online status dot
- message list
- composer
- shared files or shared tasks access point

---

## 11. Task Board / Kanban Screen

### Goal
Let teams plan and track work visually inside the same collaboration workspace.

### Main Layout Zones
- board header
- filters and sort controls
- kanban columns
- task cards
- optional task detail panel on desktop

### Primary Actions
- create task
- drag task across columns
- assign teammate
- set due date
- add label
- open task detail

### Realtime Behaviors
- card movement syncs live
- assignee changes update instantly
- comments and watchers update
- due-state changes reflected live

### Required Elements
- board title
- column headers
- task count per column
- task cards with title, assignee, due date, priority, tags
- add task buttons
- filter chips
- search within tasks
- board view toggle if needed later

### Responsive Notes
- Web should support wide horizontal kanban interaction.
- Mobile should use either scrollable columns or a focused list-per-status approach that still feels native and manageable.

---

## 12. Task Detail Screen / Drawer

### Goal
Give full context for a task without losing collaboration continuity.

### Main Layout Zones
- task header
- metadata section
- description area
- comments/activity thread
- related links or attachments

### Primary Actions
- edit title
- change status
- assign owner
- set due date
- add label
- comment
- mention teammate

### Realtime Behaviors
- live comments
- status changes update instantly
- assignee and metadata refresh in place

### Required Elements
- task title
- status selector
- assignee picker
- due date picker
- labels
- priority pill
- description editor
- comment composer
- activity history
- attachment area

### Responsive Notes
- Web should prefer a right-side drawer or modal sheet from the board.
- Mobile should use a dedicated full-screen detail page.

---

## 13. Notifications Center

### Goal
Collect all important updates in one actionable place.

### Main Layout Zones
- notifications header
- filter tabs
- notification list
- empty state or grouped sections

### Primary Actions
- open related item
- mark as read
- mark all as read
- filter by type

### Realtime Behaviors
- new notifications appear live
- unread count updates globally
- notification state changes reflect across views

### Required Elements
- notification cards or rows
- type icons
- timestamp
- short context text
- actor avatar
- action state
- filter chips or tabs

### Responsive Notes
- Web can support split view with preview.
- Mobile should prioritize a clean stacked list with swipe or tap actions.

---

## 14. Team Members / People Directory

### Goal
Help users find teammates, see presence, and understand workspace roles.

### Main Layout Zones
- people header
- search and filters
- member list or grid
- optional profile preview panel

### Primary Actions
- search teammate
- view profile
- send DM
- invite member
- manage role if authorized

### Realtime Behaviors
- online/offline state changes
- current activity status refresh

### Required Elements
- member avatar
- name
- role badge
- online state
- status message
- join date or team metadata
- quick action buttons

---

## 15. Profile And Personal Settings

### Goal
Let users manage their personal identity, preferences, and session-related settings.

### Main Layout Zones
- profile summary
- account settings
- notification preferences
- appearance preferences
- session/security controls

### Primary Actions
- edit profile
- upload avatar
- update display name
- configure notifications
- log out

### Required Elements
- avatar editor
- name and email fields
- notification toggles
- status message field
- theme or appearance options if supported
- logout action

---

## 16. Workspace Settings And Admin Screens

### Goal
Give admins enough control without turning the UI into a heavy enterprise tool.

### Main Layout Zones
- workspace profile settings
- members and roles
- channels management
- permissions or access settings
- integrations placeholder area for future growth

### Primary Actions
- update workspace name
- change workspace avatar
- invite or remove members
- assign roles
- create or archive channels

### Required Elements
- settings nav
- form sections
- member management table or list
- role dropdown or selector
- invite modal
- channel management rows
- confirmation dialogs

### Responsive Notes
- Desktop can use tabbed or side-nav settings pages.
- Mobile should simplify settings into clear stacked subsections.

---

## 17. Search / Command Palette / Quick Actions

### Goal
Provide a fast way to navigate, create, and retrieve content from anywhere.

### Main Layout Zones
- search field
- recent items
- categorized results
- quick actions area

### Primary Actions
- jump to channel
- open DM
- open task
- create task
- create channel
- invite teammate

### Realtime Behaviors
- live search suggestions
- recent items update based on use

### Required Elements
- command/search input
- keyboard shortcut hint
- grouped result rows
- icons per item type
- quick action shortcuts

### Responsive Notes
- Desktop should feel like a powerful omnibox overlay.
- Mobile can use a full-screen search sheet.

---

## 18. Empty, Loading, Error, And Edge States

### Goal
Ensure the product still feels polished when there is no data, weak connectivity, or partial failure.

### Required Empty States
- no channels yet
- no messages yet
- no tasks yet
- no notifications yet
- no teammates yet
- no search results

### Required Loading States
- app bootstrap
- dashboard loading
- message list skeleton
- task board skeleton
- member list loading

### Required Error States
- session expired
- network disconnected
- failed to load workspace
- failed to send message
- failed to update task

### Design Notes
- Empty states should teach the next action.
- Loading states should preserve layout structure with skeletons.
- Error states should be clear, calm, and actionable.

---

## 19. Mobile-Specific Navigation Shell

### Goal
Define the default mobile app structure clearly.

### Required Mobile Structure
- top contextual header
- bottom tab bar
- stacked drill-down navigation
- floating or clearly visible quick action entry point

### Suggested Mobile Tabs
- Home
- Chat
- Tasks
- Notifications
- You

### Mobile Experience Priorities
- quick catch-up
- fast message reply
- task updates on the go
- easy switching between active channels and DMs
- clean notification triage

---

## 20. Web-Specific Multi-Panel Workspace Layout

### Goal
Define the desktop experience as a powerful collaboration cockpit.

### Required Web Structure
- persistent workspace sidebar
- central work panel
- optional contextual right panel
- top utility bar for search, notifications, and profile

### Desktop Priorities
- multitasking
- at-a-glance awareness
- fast switching
- parallel context viewing

## Reusable Components And Design System

### Navigation Components
- workspace switcher
- sidebar navigation items
- top bar
- breadcrumbs
- bottom tab bar
- section headers
- collapsible nav groups

### Collaboration Components
- message row
- message composer
- thread preview
- reply view
- typing indicator
- unread badge
- presence dot
- avatar and avatar stack
- mention pill
- emoji reaction chip
- activity feed item

### Task Components
- kanban column
- task card
- task priority pill
- due date badge
- assignee chip
- tag or label chip
- status selector
- comment composer
- task activity item

### Workspace/Admin Components
- invite modal
- member row
- role badge
- role selector
- permissions indicator
- settings form section
- destructive action confirmation

### Feedback Components
- toast
- inline banner
- success state
- warning state
- error block
- skeleton loader
- empty state illustration/card
- modal dialog

### Utility Components
- search bar
- command palette
- filter chip
- segmented control
- date picker
- attachment picker
- dropdown menu
- contextual action menu
- notification card

## Interaction And Motion Guidelines
- Use motion to reinforce live collaboration, not to distract.
- New messages, typing states, unread transitions, and task state updates should feel responsive and alive.
- Animations should be short, subtle, and purposeful.
- Use hover and focus states clearly on web.
- Use tactile pressed states and swipe-friendly patterns on mobile.

## Accessibility And Usability Expectations
- Maintain strong color contrast for core text and actions.
- Do not rely only on color to indicate unread, online, error, or priority states.
- Make tap targets comfortable on mobile.
- Ensure forms, board controls, and composer interactions are clear and keyboard-friendly on web.
- Make dense desktop screens still readable through spacing, typography, and grouping.

## Stitch Output Instructions
Generate designs for both web and mobile using the same brand system.

The output should include:
- a web landing page
- auth flows
- onboarding flow
- a desktop workspace app
- a mobile workspace app
- task management views
- chat and direct message views
- notifications
- people and settings views
- empty, loading, and error states

The result should feel like a polished startup collaboration product with strong realtime energy, not a generic admin dashboard.

## Design Checklist
Use this checklist while generating the design:
- Does the product feel alive and collaborative?
- Is the visual direction bold and memorable without hurting clarity?
- Can users easily move between chat, tasks, team, and notifications?
- Are realtime states visible and intuitive?
- Does the desktop layout feel productive and multi-panel?
- Does the mobile layout feel focused and native?
- Are all MVP features represented in at least one screen?
- Are the component patterns reusable across web and mobile?
