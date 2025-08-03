@tailwind
base
@tailwind
components
@tailwind
utilities
\
@layer
base
{
  \
  :root
  \
    --background: 0 0% 3.9%
    \
    --foreground: 0 0% 98%
    \
    --card: 0 0% 3.9%
    \
    --card-foreground: 0 0% 98%
    \
    --popover: 0 0% 3.9%
    \
    --popover-foreground: 0 0% 98%
    \
    --primary: 240 5.9% 10%
    \
    --primary-foreground: 0 0% 98%
    \
    --secondary: 240 3.7% 15.9%
    \
    --secondary-foreground: 0 0% 98%
    \
    --muted: 0 0% 15%
    \
    --muted-foreground: 240 5% 64.9%
    \
    --accent: 0 0% 15%
    \
    --accent-foreground: 0 0% 98%
    \
    --destructive: 0 84.2% 60.2%
    \
    --destructive-foreground: 0 0% 98%
    \
    --border: 240 3.7% 15.9%
    \
    --input: 240 3.7% 15.9%
    \
    --ring: 240 4.9% 83.9%
    \
    --radius: 0.5rem
  \
  .dark
  \
    --background: 0 0% 3.9%
    \
    --foreground: 0 0% 98%
    \
    --card: 0 0% 3.9%
    \
    --card-foreground: 0 0% 98%
    \
    --popover: 0 0% 3.9%
    \
    --popover-foreground: 0 0% 98%
    \
    --primary: 0 0% 98%
    --primary - foreground
    : 240 5.9% 10%

    --secondary
    : 240 3.7% 15.9%
    --secondary - foreground
    : 0 0% 98%

    --muted
    : 0 0% 15%
    --muted - foreground
    : 240 5% 64.9%

    --accent
    : 0 0% 15%
    --accent - foreground
    : 0 0% 98%

    --destructive
    : 0 62.8% 30.6%
    --destructive - foreground
    : 0 0% 98%

    --border
    : 240 3.7% 15.9%
    --input
    : 240 3.7% 15.9%
    --ring
    : 240 4.9% 83.9%

    --radius
    : 0.5rem
}

@layer
base
{
  *
  @apply
  border - border
  body
  @apply
  bg - background
  text - foreground
  font - feature - settings
  :
      "rlig" 1,
      "calt" 1
}

@layer
components
{
  .btn-primary
  @apply
  bg - gradient - to - r
  from - purple - 600
  to - blue - 600
  text - white

  .badge-primary
  @apply
  bg - blue - 500 / 20
  text - blue - 300
  border - blue - 500 / 30

  .badge-secondary
  @apply
  bg - purple - 500 / 20
  text - purple - 300
  border - purple - 500 / 30

  .badge-success
  @apply
  bg - green - 500 / 20
  text - green - 300
  border - green - 500 / 30

  .badge-warning
  @apply
  bg - yellow - 500 / 20
  text - yellow - 300
  border - yellow - 500 / 30

  .badge-danger
  @apply
  bg - red - 500 / 20
  text - red - 300
  border - red - 500 / 30

  .badge-info
  @apply
  bg - cyan - 500 / 20
  text - cyan - 300
  border - cyan - 500 / 30

  .glass-card
  background: hsla(0, 0%, 100%, 0.05);
  box - shadow
  : 0 8px 32px 0 hsla(0, 0%, 0%, 0.1)
    backdrop - filter
    : blur(8px)
  ;-webkit - backdrop - filter
  : blur(8px)
    border - radius
    : 10px
    border:
    1px solid hsla(0, 0%, 100%, 0.1)

  .card-hover:hover
  transform: scale - 105
  transition: transform
  0.3s ease

  .input-modern
  @apply
  bg - slate - 800 / 30
  border
  border - gray - 600
  rounded - md
  px - 3
  py - 2
  focus: outline - none
  focus: ring - 2
  focus: ring - blue - 500 / 50

  .tabs-modern [data-state="active"]
  @apply
  text - white
  bg - gradient - to - r
  from - purple - 600
  to - blue - 600

  .cyber-grid
  background - image
  :
      radial-gradient(ellipse at 0% 0%, rgba(56, 89, 255, 0.1) 1%, transparent 40%),
      radial-gradient(ellipse at 100% 100%, rgba(22, 230, 237, 0.1) 1%, transparent 40%)
    width: 100%
  height: 100%;
  position: absolute
  top: 0
  left: 0
  z - index
  : 0

  .floating-particles
  position: absolute
  top: 0
  left: 0
  width: 100%;
  height: 100%;
  z - index
  : 1
    pointer - events
    : none
    overflow: hidden

  .floating-particles:before
  content: ""
  position: absolute
  top: 0
  left: 0
  width: 200%;
  height: 200%;
  background: url("/sparkles.png")
  background - size
  : 100px 100px
    animation: particlesAnimation
    120s linear infinite
    opacity: 0.3
}

@keyframes
particlesAnimation
{
  0% {
    transform: translate3d(0, 0, 0);
}
100% {
    transform: translate3d(-50%, -50%, 0);
}
}
