import { Component, OnInit, Inject, PLATFORM_ID, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @ViewChild('svgContainer', { static: false }) svgContainer!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }

  currentImage: string = '/assets/dash.png';

  cards = [
    {
      icon: '/assets/manage.png',
      image: '/assets/portfolio.png',
      title: 'Manage your portfolio',
      description: 'Connect all your exchanges accounts and manage them with our trading terminal. Free of charge!'
    },
    {
      icon: '/assets/trail.png',
      image: '/assets/trailing.png',
      title: 'Trailing features',
      description: 'Follow the price movement and sell/buy automatically when the price goes in another direction.'
    },
    {
      icon: '/assets/tradebot.png',
      image: '/assets/tradingbot.png',
      title: 'Trading Bots',
      description: 'Copy other traders easily, or trade automatically with our unique trading A.I.'
    },
    {
      icon: '/assets/protool.png',
      image: '/assets/protools.png',
      title: 'Trade with trendex',
      description: 'Use our new AI trendex bot to maximise your profit and earn in crypto.'
    }
  ];


  changeImage(image: string): void {
    this.currentImage = image;
  }

}
