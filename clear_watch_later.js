/*
    The script must be pasted in the console of the Watch Later Youtube tab.

    select: selects all the videos option buttons.
        - select[25] is clicked since that is the first video.
    
    its: selects the options of the option button.
        -its[8] is clicked since that is the remove from watch later button.
*/

setInterval(()=>{
  let select = document.querySelectorAll('button.style-scope.yt-icon-button[aria-label="Action menu"]')
  select[25].click() //Could grab just the 25th, but honestly, time does not matter in this case.
  let its = document.querySelectorAll(".style-scope .ytd-menu-service-item-renderer")
  its[8].click() //Again could just grab the 8th.
}, 1000) //Time interval just so other videos are Lazily fetched by google api