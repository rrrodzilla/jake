import '../dist/output.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="bg-jake bg-contain w-screen h-screen flex bg-no-repeat">
<div class="mt-48 ml-48 flex flex-col w-1/3 ">
<h1 class="text-8xl font-display flex mx-auto">Celebrating Jake</h1>
<div class="flex font-copy mx-auto text-2xl font-light"><span class="font-serif">"</span>To live in hearts we leave behind is not to die<span class="font-serif">"</span></div>
<div class="flex font-copy text-xl self-end">- Thomas Campbell</div>
<div class="flex font-copy text-lg mt-1/4">Friends and family, <br />We've lost one of the best men the world will ever know.
Come celebrate Jake's life on October 14th in Seattle. 
RSVP by October 10, 2022 by email with the number of guests coming. Please include yourself. We'll respond with location and time details once we have them.

</div>
<div class="flex font-copy text-lg mt-8">Send RSVPs to&nbsp;<a class="underline" href="mailto:celebratingjake@gmail.com">celebratingjake@gmail.com</a></div>
</div>
 </div>
`

