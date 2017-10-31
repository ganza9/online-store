import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  albums: Album[] = [
    new Album("Speaking In Tongues", "Talking Heads", "The fifth studio album by Talking Heads, it is also their highest charting album on the American Billboard 200", 1),
    new Album("Make It Big", "Wham!", "Certified 6x Platinum, the album has sold over 10 million copies worldwide.", 2),
    new Album("Skid Row", "Skid Row", "Debut studio album from Skid Row produced 3 singles and brought the group nationwide popularity.", 3),
    new Album("Van Halen", "Van Halen", "Debut studio album that contains many of the bands signature songs.", 4),
    new Album("Let's Dance", "David Bowie", "Bowie's fifteenth studio album, it was produced by Nile Rodgers and contains three of Bowie's most successful singles.", 5)
  ];

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);
  };

}
