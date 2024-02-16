// // avis.component.ts
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { AvisService } from 'chemin_vers_votre_service_avis'; // Importez votre service qui récupère les avis

// @Component({
//   selector: 'app-avis',
//   templateUrl: './avis.component.html',
//   styleUrls: ['./avis.component.css']
// })
// export class AvisComponent implements OnInit {
//   attractionId: number;
//   avis: any[]; // Supposons que vos avis soient stockés sous forme de tableau d'objets

//   constructor(private route: ActivatedRoute, private avisService: AvisService) { }

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.attractionId = +params['id']; // Récupérez l'ID de l'attraction depuis les paramètres d'URL
//       this.loadAvis(this.attractionId);
//     });
//   }

//   loadAvis(attractionId: number) {
//     this.avisService.getAvis(attractionId).subscribe(data => {
//       this.avis = data; // Chargez les avis de votre service
//     });
//   }
// }
