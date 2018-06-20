import $ from 'jquery'

import BaseModule from './BaseModule'

/**
 * Search
 *
 * @selector .js-search
 * @enabled true
 */
export default class Search extends BaseModule {
  constructor () {
    super()
    this.ns = BaseModule.ns('Search')
    // this.config = $.extend(true, {}, DEFAULTS, config || {})

    this.DEFAULT_OPTIONS = {}
  }

  init (element) {
    var DEFAULTS = {}
    var self = this

    this.$el = $(element)

    this.enable()

    return this
  }

  enable () {
    window.ss360Config = {
      siteId: 'accessibility-developer-guide.netlify.com',
      searchBoxSelector: '#' + this.$el.find('input').attr('id'),
      showImagesSuggestions: false,
      specialMobileSuggest: {
        enabled: false
      },
      suggestionsEqualSearch: true
    }

    initializeSs360()

    this.$el.find('.search--toggle').on('click', function () {
      // Hiding breadcrumbs does not make any sense in mobile view. We just let the search input overlap.
      // var breadcrumbs = $('nav.breadcrumbs .breadcrumbs--inner')
      // breadcrumbs.css('visibility', 'hidden')
      $(this)
        .siblings('.search--input')
        .addClass('search--input-expanded')
        .focus()
        .focusout(function () {
          $(this).removeClass('search--input-expanded')
          // breadcrumbs.css('visibility', 'visible')
        })
    })
  }
}
