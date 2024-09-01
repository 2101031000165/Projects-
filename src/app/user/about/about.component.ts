import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  images = [
    {
      
      title: 'Alex Rodriguez',
      description: 'Discovering Minimalin has been a revelation for me. As a busy professional, I often find myself juggling multiple tasks and struggling to find the right words.',
     
    },
    {
      
      title: 'Jessica Patel',
      description: 'Minimalin is pure genius! Im a student, and writing assignments used to be a daunting task. But with ChatGPT, its like having a personal tutor and writing coach by my side 24/7.',

    },
    {
     
      title: 'Michael Chen',
      description: 'Writing has never been my strong suit, but ChatGPT has changed the game for me. Whether its crafting compelling emails, creative stories, or engaging social media posts.',
      
    },
    // Add more images as needed
  ];
  
}
