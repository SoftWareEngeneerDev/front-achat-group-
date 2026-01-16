import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comment-ca-marche',
  imports: [CommonModule,RouterModule],
  templateUrl: './comment-ca-marche.html',
  styleUrl: './comment-ca-marche.css',
})
export class CommentCaMarcheComponent {
  steps = [
    {
      number: 1,
      title: 'Choisissez un produit',
      description: 'Parcourez nos produits disponibles en achats groupés. Chaque produit affiche le prix original et le prix de groupe.',
      icon: 'fas fa-search'
    },
    {
      number: 2,
      title: 'Rejoignez un groupe',
      description: 'Rejoignez un groupe d\'achat existant ou créez-en un nouveau. Plus le groupe est nombreux, plus le prix baisse !',
      icon: 'fas fa-users'
    },
    {
      number: 3,
      title: 'Attendez le quota',
      description: 'Une fois le nombre minimum de participants atteint, la commande groupée est validée et le prix réduit est appliqué.',
      icon: 'fas fa-clock'
    },
    {
      number: 4,
      title: 'Recevez votre produit',
      description: 'Votre commande est traitée et vous recevez votre produit au prix réduit. L\'économie est réalisée !',
      icon: 'fas fa-box'
    }
  ];

  faqs = [
    {
      question: 'Comment fonctionne le système de prix groupé ?',
      answer: 'Plus il y a de participants dans un groupe d\'achat, plus le prix diminue. Chaque produit a un prix original et un prix de groupe qui s\'active quand le nombre minimum de participants est atteint.'
    },
    {
      question: 'Que se passe-t-il si le groupe n\'atteint pas le quota ?',
      answer: 'Si le quota minimum n\'est pas atteint avant la date limite, la commande est annulée et vous êtes remboursé intégralement.'
    },
    {
      question: 'Puis-je annuler ma participation à un groupe ?',
      answer: 'Oui, vous pouvez annuler votre participation jusqu\'à 24h après avoir rejoint le groupe. Passé ce délai, votre participation est confirmée.'
    },
    {
      question: 'Comment sont gérées les livraisons ?',
      answer: 'Une fois le groupe complet, nous passons commande auprès du fournisseur. La livraison est groupée pour réduire les coûts et l\'impact environnemental.'
    }
  ];
}
