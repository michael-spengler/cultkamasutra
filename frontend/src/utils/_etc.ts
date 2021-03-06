function mappedToNr(): Record<string, string> {
  return {
    '1': '5fe219e9daa88b64087323b8',
    '2': '5fe219e9daa88b64087323d0',
    '3': '5fe219e9daa88b64087323ac',
    '4': '5fe219e9daa88b64087323d9',
    '5': '5fe219e9daa88b64087323b2',
    '6': '5fe219e9daa88b64087323b5',
    '7': '5fe219e9daa88b64087323d2',
    '8': '5fe219e9daa88b64087323e7',
    '9': '5fe219e9daa88b64087323d7',
    '10': '5fe219e9daa88b64087323dd',
    '11': '5fe219e9daa88b64087323be',
    '12': '5fe219e9daa88b64087323da',
    '13': '5fe219e9daa88b64087323cd',
    '14': '5fe219e9daa88b64087323f3',
    '15': '5fe219e9daa88b64087323df',
    '16': '5fe219e9daa88b64087323bd',
    '17': '5fe219e9daa88b64087323d1',
    '18': '5fe219e9daa88b64087323d3',
    '19': '5fe219e9daa88b64087323bc',
    '20': '5fe219e9daa88b64087323d5',
    '21': '5fe219e9daa88b64087323c6',
    '22': '5fe219e9daa88b64087323ed',
    '23': '5fe219e9daa88b64087323ae',
    '24': '5fe219e9daa88b64087323b9',
    '25': '5fe219e9daa88b64087323e6',
    '26': '5fe219e9daa88b64087323bf',
    '27': '5fe219e9daa88b64087323e0',
    '28': '5fe219e9daa88b64087323c2',
    '29': '5fe219e9daa88b64087323c7',
    '30': '5fe219e9daa88b64087323e5',
    '31': '5fe219e9daa88b64087323e9',
    '32': '5fe219e9daa88b64087323dc',
    '33': '5fe219e9daa88b64087323e4',
    '34': '5fe219e9daa88b64087323c9',
    '35': '5fe219e9daa88b64087323bb',
    '36': '5fe219e9daa88b64087323b4',
    '37': '5fe219e9daa88b64087323ca',
    '38': '5fe219e9daa88b64087323d8',
    '39': '5fe219e9daa88b64087323f1',
    '40': '5fe219e9daa88b64087323b6',
    '41': '5fe219e9daa88b64087323f0',
    '42': '5fe219e9daa88b64087323f2',
    '43': '5fe219e9daa88b64087323b3',
    '44': '5fe219e9daa88b64087323d6',
    '45': '5fe219e9daa88b64087323ad',
    '46': '5fe219e9daa88b64087323ce',
    '47': '5fe219e9daa88b64087323db',
    '48': '5fe219e9daa88b64087323ba',
    '49': '5fe219e9daa88b64087323c0',
    '50': '5fe219e9daa88b64087323ee',
    '51': '5fe219e9daa88b64087323e3',
    '52': '5fe219e9daa88b64087323c3',
    '53': '5fe219e9daa88b64087323eb',
    '54': '5fe219e9daa88b64087323cf',
    '55': '5fe219e9daa88b64087323cc',
    '56': '5fe219e9daa88b64087323b7',
    '57': '5fe219e9daa88b64087323c4',
    '58': '5fe219e9daa88b64087323e2',
    '59': '5fe219e9daa88b64087323b0',
    '60': '5fe219e9daa88b64087323ef',
    '61': '5fe219e9daa88b64087323de',
    '62': '5fe219e9daa88b64087323e1',
    '63': '5fe219e9daa88b64087323d4',
    '64': '5fe219e9daa88b64087323c5',
    '65': '5fe219e9daa88b64087323cb',
    '66': '5fe219e9daa88b64087323ec',
    '67': '5fe219e9daa88b64087323b1',
    '68': '5fe219e9daa88b64087323e8',
    '69': '5fe219e9daa88b64087323c1',
    '70': '5fe219e9daa88b64087323ea',
    '71': '5fe219e9daa88b64087323af',
    '72': '5fe219e9daa88b64087323c8'
  };
}

function trans(): any {
  const mapped = mappedToNr();
  const obj: any = {};
  [{ name: '', description: '', nr: '' }].forEach(x => {
    obj[mapped[x.nr]] = {
      title: x.name,
      description: x.description
    };
  });
  return { position: obj };
}
