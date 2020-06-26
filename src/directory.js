const directory = [
  {
    title: 'Git Configuration',
    list: {
      'Create git user name': 'git config --global user.name "any-user-name"',
      'Create git user email':
        'git config --global user.email "anyemail@gmail.com"',
      'Show user list config': [
        'git config --global --list',
        'cat ~/.gitconfig',
      ],
    },
  },
  {
    title: 'Navigate around local directory through git bash',
    list: {
      'Show current directory': 'pwd',
      'Return to user directory': 'cd ~',
      'Go to C: drive': 'cd /C',
      'Go to children folder': 'cd foldername',
      'Go to parent folder': 'cd ..',
      'clear screen': 'clear',
      'exit from git bash': 'exit',
    },
  },
  {
    title: 'Files & Folders',
    list: {
      'Create folder': 'mkdir example',
      'Delete folder': 'rm -rf foldername',
      'Create Files': 'touch demo.txt',
      'Delete file': 'rm foldername.txt',
    },
  },
];
export default directory;
