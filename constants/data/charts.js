export default charts = [
    {
      id: "repayment_progress",
      name: "Progression du remboursement",
      type: "donut",
      description: "Affiche le pourcentage de remboursement effectué pour chaque prêt.",
      icon: "chart-donut-variant", // donut
      gradient: ["#667EEA", "#764BA2"],
      isRecent: true
    },
    {
      id: "monthly_repayments",
      name: "Remboursements mensuels dans le temps",
      type: "line",
      description: "Affiche le total des remboursements effectués chaque mois.",
      icon: "chart-multiline", // line chart
      gradient: ["#43CEA2", "#185A9D"],
      isRecent: false
    },
    {
      id: "upcoming_vs_overdue",
      name: "Remboursements en \n retard",
      type: "chat-bar-stacked",
      description: "Visualise les montants à venir, en retard et remboursés.",
      icon: "chart-bubble", // bar-like alternative
      gradient: ["#FF512F", "#DD2476"],
      isRecent: true
    },
    {
      id: "distribution_by_contact",
      name: "Répartition des prêts par contact",
      type: "pie",
      description: "Ventilation des montants prêtés par contact.",
      icon: "chart-pie", // pie chart
      gradient: ["#1FA2FF", "#12D8FA"],
      isRecent: false
    },
    {
      id: "active_loans_timeline",
      name: "Chronologie des prêts actifs",
      type: "timeline",
      description: "Une frise chronologique des dates de début et d’échéance des prêts actifs.",
      icon: "chart-timeline-variant-shimmer", // timeline
      gradient: ["#FFB75E", "#ED8F03"],
      isRecent: false
    },
    {
      id: "interest_vs_principal",
      name: "Intérêts vs Capital",
      type: "segmentedBar",
      description: "Affiche la part du capital et des intérêts dans chaque prêt.",
      icon: "graph", // general bar chart
      gradient: ["#DA4453", "#89216B"],
      isRecent: true
    },
    {
      id: "loan_volume_trend",
      name: "Tendance du volume des prêts",
      type: "line",
      description: "Suit le nombre ou le montant des prêts créés chaque mois.",
      icon: "trending-up", // upward trend
      gradient: ["#00C9FF", "#92FE9D"],
      isRecent: false
    }
  ];
  