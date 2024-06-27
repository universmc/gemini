const edgeMetadata = {
    type: "edge", // Type d'élément
  properties: {
      direction: "forward", // Direction de l'edge
  connection: { // Détail de la connexion de l'edge
  sourceNode: "node1", // Nœud source
  targetNode: "node2" // Nœud cible
  },
      weight: 0.5, // Poids de l'edge
  label: "Edge 1" // Étiquette de l'edge
  },
    methods: {
      invertDirection: function(
  ) {
        // Méthode pour inverser la direction de l'edge
  const temp = this.connection.sourceNode;
        this.connection.sourceNode = this.connection.targetNode;
        this.connection.targetNode = temp;
      },
      updateLabel: function(newLabel) {
        // Méthode pour mettre à jour l'étiquette de l'edge
  this.label = newLabel;
      }
    }
  };
  