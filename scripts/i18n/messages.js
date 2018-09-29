import React from 'react';
import { defineMessages } from 'react-intl';

export const messages = {
  feedback: {
    misc: {
      headline: {
        id: 'app.feedback.misc.headline',
        defaultMessage: 'We value your feedback very much! Feel free to request new feature or report bugs. We will get back to you as soon as possible.'
      },
      feedback: {
        id: 'app.feedback.misc.feedback',
        defaultMessage: 'Feedback'
      },
      received: {
        id: 'app.feedback.misc.received',
        defaultMessage: 'We received your feedback and will contact you soon.'
      },
      thankYou: {
        id: 'app.feedback.misc.thankYou',
        defaultMessage: 'Thank You!'
      },
      bug: {
        id: 'app.feedback.misc.bug',
        defaultMessage: 'Bug Report'
      },
      feature: {
        id: 'app.feedback.misc.feature',
        defaultMessage: 'Feature Request'
      },
      other: {
        id: 'app.feedback.misc.other',
        defaultMessage: 'Other'
      },
    },
    labels: {
      name: {
        id: 'app.feedback.labels.name',
        defaultMessage: 'Your Name'
      },
      email: {
        id: 'app.feedback.labels.email',
        defaultMessage: 'Your Email'
      },
      type: {
        id: 'app.feedback.labels.type',
        defaultMessage: 'Feedback Type'
      },
      content: {
        id: 'app.feedback.labels.content',
        defaultMessage: 'Feedback Content'
      }
    },
    placeholders: {
      name: {
        id: 'app.feedback.placeholders.name',
        defaultMessage: 'What is your name'
      },
      email: {
        id: 'app.feedback.placeholders.email',
        defaultMessage: 'How to reach out to you'
      },
      type: {
        id: 'app.feedback.placeholders.type',
        defaultMessage: 'Choose a type for your feedback'
      },
      content: {
        id: 'app.feedback.placeholders.content',
        defaultMessage: 'Tell us more'
      }
    },
    buttons: {
      return: {
        id: 'app.feedback.buttons.return',
        defaultMessage: 'Return',
      },
      submit: {
        id: 'app.feedback.buttons.submit',
        defaultMessage: 'Submit',
      }
    }
  },
  history: {
    misc: {
      lost: {
        id: 'app.history.misc.lost',
        defaultMessage: 'History would be lost if you change browser or clean browser storage.',
      },
      noHistory: {
        id: 'app.history.misc.noHistory',
        defaultMessage: 'No history found. Please open an exsiting event or creat one first.',
      },
      history: {
        id: 'app.history.misc.history',
        defaultMessage: 'History',
      }
    },
    buttons: {
      return: {
        id: 'app.history.buttons.return',
        defaultMessage: 'Return',
      }
    },
  },
  root: {
    misc: {
      wechatIos: {
        id: 'app.root.misc.wechatIos',
        defaultMessage: 'Due to the restriction from Wechat, you need to open this page in Safari first. You are now redirecting to App Store.',
      },
      appStore: {
        id: 'app.root.misc.appStore',
        defaultMessage: 'Open in App Store?'
      },
      wechatAndroid: {
        id: 'app.root.misc.wechatAndroid',
        defaultMessage: 'Due to the restriction from Wechat, you need to open this page in Chrome first. You are now redirecting to Play Store.',
      },
      playStore: {
        id: 'app.root.misc.playStore',
        defaultMessage: 'Open in Play Store?'
      },
      notSupported: {
        id: 'app.root.misc.notSupported',
        defaultMessage: 'Sorry your operating system is not supported. Send us a feedback on top right corner to request a feature!',
      },
    }
  },
  welcome: {
    misc: {
      tips: {
        id: 'app.welcome.misc.tips',
        defaultMessage: 'Tips',
      },
      try: {
        id: 'app.welcome.misc.try',
        defaultMessage: 'Try it now',
      },
      how: {
        id: 'app.welcome.misc.how',
        defaultMessage: 'How it works',
      },
      line1: {
        id: 'app.welcome.misc.line1',
        defaultMessage: 'Neat and easy tool to split bills and share with friends.',
      },
      learnmore: {
        id: 'app.welcome.misc.learnmore',
        defaultMessage: 'Learn More',
      },
      line2: {
        id: 'app.welcome.misc.line2',
        defaultMessage: 'Create an event, give it a name and add all the people in your group.',
      },
      line3: {
        id: 'app.welcome.misc.line3',
        defaultMessage: 'Start to add group expenses, also specify who paid it and who are involved.',
      },
      line4: {
        id: 'app.welcome.misc.line4',
        defaultMessage: 'The settlement instruction is automatically calculated for you. Keep the link and share with your friends!',
      },
      click: {
        id: 'app.welcome.misc.click',
        defaultMessage: 'Click',
      },
      changeName: {
        id: 'app.welcome.misc.changeName',
        defaultMessage: 'to change name and people of the event',
      },
      feedback: {
        id: 'app.welcome.misc.feedback',
        defaultMessage: 'to give us any feedback',
      }
    },
    buttons: {
      history: {
        id: 'app.welcome.buttons.history',
        defaultMessage: 'Event History',
      },
      createEvent: {
        id: 'app.welcome.buttons.createEvent',
        defaultMessage: 'Create An Event',
      },
    }
  },
  share: {
    misc: {
      copied: {
        id: 'app.share.misc.copied',
        defaultMessage: "The link is copied to your clipboard. Share it to your friends!",
      },
      shareLink: {
        id: 'app.share.misc.shareLink',
        defaultMessage: "Share Link",
      },
      another: {
        id: 'app.share.misc.another',
        defaultMessage: 'Split bills for another event?',
      }
    },
  },
  settlement: {
    misc: {
      dontOwe: {
        id: 'app.settlement.misc.dontOwe',
        defaultMessage: "You don't owe anyone.",
      },
      payTo: {
        id: 'app.settlement.misc.payTo',
        defaultMessage: "{amount} to {name}",
      },
      pay: {
        id: 'app.settlement.misc.pay',
        defaultMessage: "Pay",
      }
    },
    labels: {
      settlement: {
        id: 'app.settlement.labels.settlement',
        defaultMessage: 'Settlement',
      },
    }
  }, event: {
    misc: {
      who: {
        id: 'app.event.manage.misc.who',
        defaultMessage: 'Who are in this event?'
      },
      typeName: {
        id: 'app.event.manage.misc.typeName',
        defaultMessage: 'Type in a name and hit enter'
      },
      error: {
        id: 'app.event.manage.misc.error',
        defaultMessage: 'Failed'
      },
      giveName: {
        id: 'app.event.manage.misc.giveName',
        defaultMessage: 'Give this event a name'
      }
    },
    buttons: {
      update: {
        id: 'app.event.manage.buttons.update',
        defaultMessage: 'Update'
      },
      return: {
        id: 'app.event.manage.buttons.return',
        defaultMessage: 'Return'
      },
      createEvent: {
        id: 'app.event.manage.buttons.createEvent',
        defaultMessage: 'Create this event'
      },
    },
    labels: {
      name: {
        id: 'app.event.labels.name',
        defaultMessage: 'Name'
      }
    }
  }, expense: {
    misc: {
      editExpense: {
        id: 'app.expense.misc.editExpense',
        defaultMessage: "Edit an expense",
      }
    },
    labels: {
      share: {
        id: 'app.expense.labels.share',
        defaultMessage: "Share(s)",
      }
    },
    buttons: {
      splitEvenly: {
        id: 'app.expense.buttons.splitEvenly',
        defaultMessage: "Split evenly",
      },
      byPercentage: {
        id: 'app.expense.buttons.percentage',
        defaultMessage: "By %",
      },
      byShares: {
        id: 'app.expense.buttons.shares',
        defaultMessage: "By shares",
      }
    }
  }, expenseList: {
    misc: {
      allExpenses: {
        id: 'app.expense.list.misc.allExpenses',
        defaultMessage: "All expenses",
      },
      noExpense: {
        id: 'app.expense.list.misc.noExpense',
        defaultMessage: "There's no expense recorded yet",
      }
    },
    buttons: {
      edit: {
        id: 'app.expense.list.buttons.edit',
        defaultMessage: 'Edit'
      }
    }
  }, expenseForm: {
    labels: {
      activity: {
        id: 'app.expense.form.label.activity',
        defaultMessage: 'Activity'
      },
      cost: {
        id: 'app.expense.form.label.cost',
        defaultMessage: 'Cost'
      },
      involved: {
        id: 'app.expense.form.label.involved',
        defaultMessage: 'People Involved'
      },
      payer: {
        id: 'app.expense.form.label.payer',
        defaultMessage: 'Payer'
      }
    },
    placeholders: {
      activity: {
        id: 'app.expense.form.placeholders.activity',
        defaultMessage: 'description'
      },
      cost: {
        id: 'app.expense.form.placeholders.cost',
        defaultMessage: 'how much spent'
      },
      involved: {
        id: 'app.expense.form.placeholders.involved',
        defaultMessage: 'split evenly among these people'
      },
      payer: {
        id: 'app.expense.form.placeholders.payer',
        defaultMessage: 'who paid this'
      }
    },
    buttons: {
      add: {
        id: 'app.expense.form.buttons.add',
        defaultMessage: 'Add'
      },
      update: {
        id: 'app.expense.form.buttons.update',
        defaultMessage: 'Update'
      },
      delete: {
        id: 'app.expense.form.buttons.delete',
        defaultMessage: 'Delete'
      },
      addAnExpense: {
        id: 'app.expense.form.buttons.addAnExpense',
        defaultMessage: 'Add an expense'
      }
    },
    misc: {
      error: {
        id: 'app.expense.form.misc.error',
        defaultMessage: 'Failed'
      }
    }
  }
};

export const feedback = defineMessages(messages.feedback);

export const history = defineMessages(messages.history);

export const root = defineMessages(messages.root);

export const welcome = defineMessages(messages.welcome);

export const share = defineMessages(messages.share);

export const settlement = defineMessages(messages.settlement);

export const event = defineMessages(messages.event);

export const expense = defineMessages(messages.expense);

export const expenseList = defineMessages(messages.expenseList);

export const expenseForm = defineMessages(messages.expenseForm);
