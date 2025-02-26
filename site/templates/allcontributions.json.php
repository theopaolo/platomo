<?php

$children = $page->children()->listed();
$data = [
  'data' => []
];

if ($children->isNotEmpty()) {
  $data['data'] = []; // Initialize the 'data' array

  // Loop through each child
  foreach ($children as $child) {
      // Initialize an array for labos
      $labosData = [];

      // Fetch the related 'labos' pages
      foreach ($child->labos()->toPages() as $labo) {
          $labosData[] = $labo->title()->value(); // Add each labo's title to the array
      }

      // Add the child's data, including the 'labos' array
      $data['data'][] = [
          'title' => $child->title()->value(),
          'labos' => $labosData, // Include the 'labos' data here
          // 'author' => $child->author()->toUser()->name()->value(),
          'categories' => $child->tags()->split(),
          'formats' => $child->formats()->split(),
          'url' => $child->url(),
      ];
  }

  // Encode and output the data as JSON
  echo json_encode($data);
  return;
}
