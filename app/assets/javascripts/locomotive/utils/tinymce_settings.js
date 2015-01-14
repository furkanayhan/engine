var toggle=0;
window.Locomotive.tinyMCE = {
  defaultSettings: {
    theme: 'advanced',
    skin: 'locomotive',
    plugins: 'safari,jqueryinlinepopups,table,locomotive_media,fullscreen,paste,colorpicker',
    extended_valid_elements: 'iframe[width|height|frameborder|allowfullscreen|src|title]',
    theme_advanced_buttons1: 'bold,italic,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist,|,outdent,indent,blockquote,|,link,unlink,|,table,|,locomotive_media,|,pasteword',
    theme_advanced_buttons2: 'formatselect,fontselect,fontsizeselect,forecolor,backcolor,textshadow',
    theme_advanced_buttons3: '',
    theme_advanced_toolbar_location: 'top',
    theme_advanced_toolbar_align: 'left',
    height: '300',
    width: '709',
    convert_urls: false,
    fullscreen_new_window: false,
    fullscreen_settings: {
      theme_advanced_path_location: 'top'
    },
    'formats' : {
      'textshadow' : {
        'inline' : 'span',
        'styles' : {
          'text-shadow' : '1px 5px 5px rgba(0,0,0,0.8)'
        }
      },
      'noshadow' : {
        'inline' : 'span',
        'styles' : {
          'text-shadow' : '0px 0px 0px rgba(0,0,0,0)'
        }
      }
    },

    'setup' : function (ed) {
      ed.addButton('textshadow', {
        'title' : 'Metin Golgesi',
        'image' : 'http://www.tinymce.com/js/tinymce_3_x/jscripts/tiny_mce/themes/advanced/img/flash.gif',
        'onclick' : function () {
          if(!toggle){
            ed.formatter.apply('textshadow');
            toggle=!0;
          }
          else{
            ed.formatter.apply('noshadow');
            toggle=0;  
          }
          return false;
        }
      });
    }
  },
  minimalSettings: {
    theme: 'advanced',
    skin: 'locomotive',
    plugins: 'safari,jqueryinlinepopups,locomotive_media,paste',
    theme_advanced_buttons1: 'code,|,bold,italic,strikethrough,|,fontselect,fontsizeselect,|,link,unlink,|,locomotive_media,|,pasteword',
    theme_advanced_buttons2: '',
    theme_advanced_buttons3: '',
    theme_advanced_toolbar_location: 'top',
    theme_advanced_toolbar_align: 'left',
    theme_advanced_resizing_min_height: 20,
    theme_advanced_path: false,
    theme_advanced_statusbar_location: false,
    height: '20',
    width: '709',
    convert_urls: false,
    forced_root_block: false,
    force_br_newlines: true,
    force_p_newlines: false
  },
  popupSettings: {
    theme: 'advanced',
    skin: 'locomotive',
    plugins: 'safari,jqueryinlinepopups,locomotive_media,fullscreen,paste',
    extended_valid_elements: 'iframe[width|height|frameborder|allowfullscreen|src|title]',
    theme_advanced_buttons1: 'fullscreen,code,|,bold,italic,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist,|,outdent,indent,blockquote,|,link,unlink,|,locomotive_media,|,pasteword',
    theme_advanced_buttons2: 'formatselect,fontselect,fontsizeselect',
    theme_advanced_buttons3: '',
    theme_advanced_toolbar_location: 'top',
    theme_advanced_toolbar_align: 'left',
    height: '300',
    width: '545',
    convert_urls: false,
    fullscreen_new_window: false,
    fullscreen_settings: {
      theme_advanced_path_location: 'top'
    }
  }
};
