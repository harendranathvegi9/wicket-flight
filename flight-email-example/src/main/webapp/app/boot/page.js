'use strict';

define(

  [
    'app/component_data/mail_items',
    'app/component_data/compose_box',
    'app/component_data/move_to',
    'app/component_ui/mail_controls',
    'app/component_ui/move_to_selector'
  ],

  function(
    MailItemsData,
    ComposeBoxData,
    MoveToData,
    MailControlsUI,
    MoveToSelectorUI) {

    function initialize() {
      MailItemsData.attachTo(document);
      ComposeBoxData.attachTo(document, {
        selectedFolders: ['inbox']
      });
      MoveToData.attachTo(document);
      MailControlsUI.attachTo('#mail_controls');
      MoveToSelectorUI.attachTo('#move_to_selector', {
        moveActionSelector: '#move_mail',
        selectedFolders: ['inbox']
      });
    }

    return initialize;
  }
);
