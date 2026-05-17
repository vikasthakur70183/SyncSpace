# SyncSpace Mobile App Design Brief for Stitch

## Purpose
Design the mobile app experience for SyncSpace as a bold, modern realtime collaboration product for startup teams. This brief should generate native-feeling iOS and Android app designs that stay visually aligned with the web product.

The mobile app should feel:
- fast
- alive
- focused
- collaborative
- premium
- efficient on the go

## Shared Look And Feel With Web
The mobile app must visually match the web design.

Keep these brand cues consistent with the web version:
- same color palette family
- same typography spirit
- same icon style
- same avatar style
- same status colors for online, unread, success, warning, and error
- same task badges, labels, and notification language
- same energetic but trustworthy personality

This should feel like the mobile half of the same product family, not a redesigned app with a different mood.

## Product Positioning
SyncSpace mobile is for staying connected to work in realtime while moving through the day. It should help users catch up, reply, update tasks, and respond to notifications quickly without losing the product’s bold collaborative identity.

## Visual Direction
Use a bold creative productivity aesthetic adapted for mobile.

### Tone
- modern and high-energy
- collaborative and human
- confident but not noisy
- premium but approachable
- expressive without sacrificing focus

### Style
- use depth and layered cards sparingly but intentionally
- keep screens clean and thumb-friendly
- use color to guide action and status
- make live states visible through subtle animation, badges, and presence dots
- preserve strong hierarchy with compact mobile spacing

### Suggested Color Direction
- base neutrals: warm charcoal, soft slate, mist gray, off-white
- primary accent: electric blue or vivid cyan
- secondary accent: coral, amber, or tangerine
- success: fresh green
- warning: amber
- error: warm red

### Typography Direction
- bold, crisp headings
- clear mobile-friendly body text
- strong contrast between message content, metadata, and action labels

## Core Mobile Layout Model
Use a focused mobile shell:
- top contextual header
- bottom tab navigation
- stacked drill-down navigation
- full-screen detail views for tasks, messages, and settings
- quick actions visible without clutter

The app should feel fast for check-ins, replies, and updates.

## UX Priorities
- help users catch up quickly
- make chat replies effortless
- make notifications actionable
- make task updates possible in a few taps
- keep the mobile experience visually calm even when activity is high
- make presence and unread states easy to notice

## Mobile Information Architecture

### Bottom Tabs
- Home
- Chat
- Tasks
- Notifications
- You

### Drill-Down Screens
- channel list
- channel chat
- DM list
- DM conversation
- task detail
- member detail
- workspace settings
- profile settings
- search

## Required Mobile Screens

For every screen, design:
- goal
- main layout zones
- primary actions
- realtime behaviors
- required elements

---

## 1. App Launch / Session Restore

### Goal
Open the app smoothly and restore the user into the correct workspace.

### Required Elements
- branded splash
- loading indicator
- restore message
- retry or failure state

### Design Notes
- make this feel polished and lightweight

---

## 2. Sign Up Screen

### Goal
Help new users register from mobile quickly.

### Required Elements
- name field
- email field
- password field
- primary CTA
- sign-in link
- inline validation

### Design Notes
- use a focused single-column form
- keep primary CTA highly visible

---

## 3. Sign In Screen

### Goal
Return users to their workspace fast.

### Required Elements
- email field
- password field
- sign-in CTA
- forgot password link
- sign-up link
- loading and error states

---

## 4. Forgot Password Screen

### Goal
Keep account recovery simple on mobile.

### Required Elements
- email input
- reset CTA
- success confirmation

---

## 5. Onboarding Flow

### Goal
Get users into a workspace with minimal friction.

### Steps
- welcome
- create or join workspace
- invite teammates
- choose role
- create first channel

### Required Elements
- progress indicator
- workspace name input
- icon picker
- invite input
- role cards or chips
- completion confirmation

### Design Notes
- keep each step short
- one main action per screen

---

## 6. Home Screen

### Goal
Provide a quick overview of activity and what needs attention.

### Layout Zones
- workspace header
- today or priority summary
- recent activity
- task preview
- active conversations
- online team preview

### Primary Actions
- jump to chat
- open tasks
- create task
- view notifications

### Realtime Behaviors
- presence refresh
- unread counts update
- activity feed updates

### Required Elements
- workspace switcher
- quick action button
- summary cards
- presence avatars
- recent activity list

---

## 7. Chat Tab Entry Screen

### Goal
Help users switch between channels and direct messages.

### Layout Zones
- segmented or tabbed switch between channels and DMs
- search
- list content

### Required Elements
- channel rows
- DM rows
- unread badges
- online indicators
- create conversation action

### Realtime Behaviors
- unread counts update live
- active conversation indicators

---

## 8. Channel List Screen

### Goal
Help users browse workspace channels easily on mobile.

### Required Elements
- channel groups
- favorites or pinned channels
- private lock icon
- unread count
- create channel CTA

---

## 9. Channel Chat Screen

### Goal
Provide a fast mobile-first realtime messaging experience.

### Layout Zones
- top channel header
- message stream
- composer dock

### Primary Actions
- send message
- react
- reply in thread
- mention teammate
- attach file

### Realtime Behaviors
- instant messages
- typing indicators
- reactions update
- unread separators

### Required Elements
- channel name
- participant avatars
- message rows
- timestamps
- reactions
- reply count
- composer
- emoji and attachment actions

### Design Notes
- keep the composer easy to reach
- prioritize legibility and fast reply flow

---

## 10. Thread / Reply Screen

### Goal
Handle deeper conversation detail without cluttering the main chat screen.

### Required Elements
- parent message preview
- replies list
- reply composer

### Realtime Behaviors
- live reply updates

---

## 11. Direct Messages List

### Goal
Let users find and open private conversations quickly.

### Required Elements
- DM rows
- avatar or avatar stack
- online state
- last message preview
- unread badge
- new DM action

---

## 12. Direct Message Conversation

### Goal
Support private messaging with the same polish as channels.

### Required Elements
- conversation header
- message stream
- composer
- quick profile access

### Realtime Behaviors
- typing indicator
- online state updates
- unread updates

---

## 13. Tasks Tab / Board Overview

### Goal
Let users review and update work from mobile without overwhelming them.

### Layout Zones
- header
- filters
- status-based sections or horizontally scrollable columns
- task list/cards

### Primary Actions
- create task
- filter
- open task
- reassign or update status quickly

### Realtime Behaviors
- task changes sync live
- comments and assignee updates refresh

### Required Elements
- status sections
- task cards
- assignee chip
- due date
- priority pill
- labels
- search or filter access

### Design Notes
- if full kanban is too cramped, use a mobile-friendly status list approach

---

## 14. Task Detail Screen

### Goal
Give full task context in a clean mobile format.

### Required Elements
- task title
- description
- status selector
- assignee picker
- due date picker
- labels
- priority
- comments
- activity history
- attachment area

### Realtime Behaviors
- live comments
- instant status sync

---

## 15. Notifications Screen

### Goal
Make it easy to triage updates on the go.

### Required Elements
- filter tabs
- notification list
- actor avatar
- type icon
- timestamp
- read/unread states
- mark all as read action

### Realtime Behaviors
- new notifications arrive live
- unread count syncs globally

### Design Notes
- support simple tap-first actions
- swipe patterns can be used if helpful

---

## 16. Team / People Screen

### Goal
Help users find teammates, check presence, and start a DM.

### Required Elements
- search
- member rows or cards
- role badge
- online state
- quick DM action

### Realtime Behaviors
- presence changes in place

---

## 17. Profile And Personal Settings

### Goal
Give users access to identity and preference controls.

### Required Elements
- avatar editor
- display name
- email
- notification preferences
- status message
- logout action

---

## 18. Workspace Settings

### Goal
Support lightweight workspace management from mobile.

### Required Elements
- workspace profile fields
- members list
- role display
- invite action
- channel management entry points

### Design Notes
- simplify admin tasks into clear sections rather than complex tables

---

## 19. Search / Command Screen

### Goal
Give users one place to find channels, tasks, DMs, and teammates fast.

### Required Elements
- full-screen search input
- recent searches
- grouped results
- quick actions

---

## 20. Empty, Loading, And Error States

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
- use clear guidance and calm recovery actions
- make skeletons preserve layout familiarity

## Reusable Mobile Components

### Navigation
- bottom tab bar
- top header
- segmented switcher
- back navigation
- workspace switcher sheet

### Collaboration
- message row
- composer dock
- typing indicator
- unread badge
- presence dot
- avatar stack
- reaction chip
- thread preview

### Tasks
- task card
- status chip
- assignee chip
- due badge
- priority pill
- label chip
- comment composer

### Admin
- invite sheet
- member row
- role badge
- settings section
- confirmation modal

### Feedback
- toast
- inline banner
- empty state card
- skeleton loader
- error state block

### Utility
- search field
- filter chips
- date picker
- attachment picker
- notification card
- contextual action sheet

## Interaction Guidelines
- make touch interactions feel direct and responsive
- keep animations short and meaningful
- make live states visible without visual overload
- keep important actions reachable with one hand where possible

## Accessibility Expectations
- strong contrast
- large enough tap targets
- readable text sizes
- do not rely on color alone for status

## Stitch Output Request
Generate a cohesive mobile app design for SyncSpace that includes:
- app launch and session restore
- auth flow
- onboarding
- home
- channels and DMs
- mobile chat and thread flows
- tasks and task detail
- notifications
- people
- profile and workspace settings
- search
- empty/loading/error states

The final result should feel like the mobile half of the same product family as the web product.
