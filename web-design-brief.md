# SyncSpace Web Design Brief for Stitch

## Purpose
Design the web experience for SyncSpace as a bold, modern realtime collaboration platform for startup teams. This brief should generate a polished desktop-first web product that includes both the public marketing site and the authenticated workspace app.

The web product should feel:
- fast
- alive
- collaborative
- premium
- organized
- expressive but practical

## Shared Look And Feel With Mobile App
The web design must visually match the mobile app design.

Keep these brand cues consistent with the app:
- same color palette family
- same typography direction
- same icon language
- same avatar style
- same status colors for online, unread, success, warning, and error
- same task badges, chips, and notification patterns
- same overall personality: energetic, creative, startup-friendly, and credible

This should feel like one product ecosystem across web and mobile, not two different brands.

## Product Positioning
SyncSpace is a realtime team workspace where startup teams communicate, organize tasks, and stay aligned in one place.

The web version should feel like a powerful collaboration cockpit:
- great for multitasking
- easy to scan
- built for fast switching between chat, tasks, and team activity
- rich in realtime context without feeling messy

Avoid a generic admin dashboard look.

## Visual Direction
Use a bold creative productivity aesthetic.

### Tone
- modern and high-energy
- collaborative and human
- confident but not loud
- premium but approachable
- expressive without hurting usability

### Style
- use layered panels and rich surfaces instead of flat bland layouts
- prefer warm neutrals with vivid live-state accents
- use depth, spacing, and color grouping to organize information
- make realtime status feel visible through subtle motion and highlights
- keep dense screens readable through clear hierarchy

### Suggested Color Direction
- base neutrals: warm charcoal, soft slate, mist gray, off-white
- primary accent: electric blue or vivid cyan
- secondary accent: coral, amber, or tangerine
- success: fresh green
- warning: amber
- error: warm red

### Typography Direction
- crisp expressive headings
- highly legible body text
- clear contrast between primary content, metadata, and status text

## Core Web Layout Model
The authenticated web app should use a multi-panel layout:
- left sidebar for workspace switcher, navigation, channels, DMs, and shortcuts
- center panel for active content
- optional right panel for details, thread replies, member info, or activity context
- top utility bar for search, notifications, and user actions

The experience should feel efficient and powerful on desktop and laptop screens.

## UX Priorities
- obvious realtime activity
- low-friction context switching
- at-a-glance awareness of what needs attention
- clear unread, mention, and notification states
- fast actions from anywhere
- support dense workflows without visual clutter

## Web Information Architecture

### Public Pages
- Landing page
- Sign up
- Sign in
- Forgot password

### Authenticated App Areas
- Workspace dashboard
- Channels
- Direct messages
- Tasks
- Notifications
- Team / people
- Search / command palette
- Profile and settings
- Workspace settings and admin

## Required Web Pages And Screens

For every screen, design:
- goal
- main layout zones
- primary actions
- realtime behaviors
- required elements

---

## 1. Landing Page

### Goal
Show the product value clearly and drive sign up.

### Layout Zones
- top navigation
- hero
- feature storytelling sections
- product mockup showcase
- collaboration proof section
- CTA footer

### Primary Actions
- start free
- sign in
- explore product

### Required Elements
- strong headline
- short supporting copy
- primary and secondary CTA
- product visuals showing chat, tasks, and notifications together
- feature cards
- cross-platform messaging
- polished footer

### Design Notes
- make it feel editorial, premium, and startup-focused
- use bolder composition than a typical SaaS landing page

---

## 2. Sign Up Page

### Goal
Help new users create an account with confidence.

### Layout Zones
- branded left visual or hero panel
- form area
- support text

### Required Elements
- name field
- email field
- password field
- CTA button
- sign-in link
- terms acknowledgement
- inline validation

---

## 3. Sign In Page

### Goal
Help returning users get back into work quickly.

### Layout Zones
- compact auth shell
- form card
- recovery links

### Required Elements
- email field
- password field
- sign-in CTA
- forgot password link
- sign-up link
- loading and error states

---

## 4. Forgot Password Page

### Goal
Keep recovery simple and reassuring.

### Required Elements
- email input
- reset CTA
- success confirmation state
- resend option

---

## 5. Session Restore / Loading State

### Goal
Bridge the user into their workspace smoothly while session cookies restore access.

### Required Elements
- branded loading shell
- loading indicator
- restore message
- retry/failure state

---

## 6. Onboarding Flow

### Goal
Get a new user into a working workspace quickly.

### Steps
- welcome
- create or join workspace
- invite teammates
- choose role
- create first channel

### Required Elements
- stepper or progress indicator
- workspace name field
- workspace icon picker
- invite input rows
- role selection cards
- success screen

### Design Notes
- web can show side context or illustration panel during onboarding

---

## 7. Workspace Dashboard

### Goal
Provide a high-signal overview of activity and priorities.

### Layout Zones
- workspace header
- quick actions
- summary cards
- recent activity
- active conversations
- upcoming tasks
- online team section

### Primary Actions
- open channel
- open task board
- create task
- create channel
- invite teammate

### Realtime Behaviors
- live activity feed updates
- presence changes
- unread counts updating in place

### Required Elements
- workspace switcher
- quick action buttons
- notifications summary
- presence cluster
- task cards
- activity timeline

---

## 8. Channel Navigation And List

### Goal
Support fast browsing of workspace channels from the sidebar.

### Required Elements
- channel sections
- unread badges
- private channel lock icon
- favorites or pinned channels
- create channel action

### Realtime Behaviors
- unread counts update live
- active channel highlighting

---

## 9. Channel Chat Screen

### Goal
Deliver a refined realtime collaboration chat experience.

### Layout Zones
- channel header
- message stream
- composer
- optional right-side thread or member panel

### Primary Actions
- send message
- reply in thread
- react
- mention
- attach file
- open channel info

### Realtime Behaviors
- instant message arrival
- typing indicator
- reaction updates
- unread separators
- live presence

### Required Elements
- channel header
- message rows
- sender identity
- timestamp
- reactions
- reply count
- composer
- emoji and attachment actions
- typing indicator

---

## 10. Direct Messages

### Goal
Support private conversations with the same polish as channels.

### Layout Zones
- DM list
- active conversation
- optional right-side profile or shared context panel

### Required Elements
- conversation rows
- avatar stacks
- online state
- message stream
- composer
- search or quick profile access

### Realtime Behaviors
- typing state
- online/offline changes
- unread updates

---

## 11. Task Board

### Goal
Make work planning feel native inside the collaboration workspace.

### Layout Zones
- board header
- filters
- kanban columns
- task cards
- optional detail drawer

### Primary Actions
- create task
- drag task
- assign owner
- set due date
- add label

### Realtime Behaviors
- live card movement
- instant metadata updates
- shared comments/activity refresh

### Required Elements
- board title
- column headers
- task counts
- task cards with title, assignee, due date, priority, labels
- filters
- search

---

## 12. Task Detail Drawer

### Goal
Let users inspect and update tasks without losing the board context.

### Required Elements
- task title
- description
- assignee picker
- status selector
- due date
- priority
- labels
- comments
- activity history
- attachment area

### Realtime Behaviors
- comments update live
- status changes sync instantly

---

## 13. Notifications Center

### Goal
Centralize actionable updates.

### Layout Zones
- notification filters
- list
- optional preview panel

### Required Elements
- notification cards
- actor avatar
- type icon
- timestamp
- read/unread state
- mark all as read action

### Realtime Behaviors
- new notifications appear live
- unread count syncs globally

---

## 14. Team / People Directory

### Goal
Help users find teammates and understand roles.

### Required Elements
- search
- filters
- member rows or cards
- role badge
- online state
- quick DM action
- invite teammate action

### Realtime Behaviors
- presence changes in place

---

## 15. Profile And Personal Settings

### Goal
Let users manage profile, preferences, and logout.

### Required Elements
- avatar editor
- display name
- email
- notification preferences
- status message
- logout action

---

## 16. Workspace Settings And Admin

### Goal
Provide startup-friendly admin tools without enterprise heaviness.

### Layout Zones
- settings navigation
- workspace profile
- members and roles
- channels management
- permissions section

### Required Elements
- forms
- member management list
- role selector
- invite modal
- channel rows
- confirmation dialogs

---

## 17. Search / Command Palette

### Goal
Provide fast global access to content and actions.

### Required Elements
- command input
- recent items
- grouped results
- keyboard shortcut hint
- quick actions

### Actions
- jump to channel
- open DM
- open task
- create task
- create channel
- invite teammate

---

## 18. Empty, Loading, And Error States

### Required States
- no channels
- no messages
- no tasks
- no notifications
- no teammates
- no search results
- session expired
- network disconnected
- failed to load workspace
- failed to send message
- failed to update task

### Design Notes
- keep these states visually polished and actionable
- use skeletons that preserve layout structure

## Reusable Web Components

### Navigation
- workspace switcher
- sidebar item
- collapsible nav group
- top bar
- breadcrumbs

### Collaboration
- message row
- composer
- thread preview
- typing indicator
- unread badge
- presence dot
- avatar stack
- reaction chip

### Tasks
- kanban column
- task card
- assignee chip
- due badge
- priority pill
- label chip
- status selector

### Admin
- invite modal
- member row
- role badge
- settings section
- confirmation dialog

### Feedback
- toast
- banner
- empty state card
- skeleton loader
- error block

### Utility
- search bar
- command palette
- filter chip
- date picker
- dropdown
- notification card

## Interaction Guidelines
- realtime changes should feel immediate but calm
- use hover states clearly
- use short purposeful animations
- emphasize unread, live, and active states without overwhelming the screen

## Accessibility Expectations
- strong contrast
- keyboard-friendly actions
- readable dense layouts
- do not rely on color alone for status or priority

## Stitch Output Request
Generate a cohesive web product design for SyncSpace that includes:
- landing page
- auth flow
- onboarding
- full desktop workspace app
- dashboard
- channels and DMs
- task board and task detail
- notifications
- people and admin settings
- empty/loading/error states

The final result should feel like the web half of the same product family as the mobile app.
