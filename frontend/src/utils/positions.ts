const positions = [
  {
    nr: 3,
    name: 'North Pole',
    description:
      'This position brings an interesting mixture of tension and relaxation for the man! The man does a handstand with his feet against the wall. His pleasure is entirely in her hands. She can use her hands to touch and support him while satisfying him with her mouth.',
    intimacy: 2,
    man: {
      primary:
        'M. triceps brachii,M. latissimus dorsi,M. pectoralis,M. deltoideus',
      secondary: 'M. rectus abdominis',
      level: 4
    },
    woman: { primary: 'M. erector spinae', level: 4 }
  },
  {
    nr: 45,
    name: 'The Life Buoy',
    description:
      'She can let herself go completely! While the man is standing on an elevated base with one leg, his partner embraces his neck with her arms and encloses his pelvis with her legs. Once she feels safe, she can lean back her torso. The man is holding her bottom and back and moving back and forth rhythmically.',
    intimacy: 1,
    man: {
      primary: 'M. biceps brachii,M. quadriceps,M. erector spinae',
      secondary: 'M. pectoralis',
      level: 4
    },
    woman: {
      primary: 'M. biceps brachii',
      secondary: 'M. adductor,M. rectus abdominis',
      level: 4
    }
  },
  {
    nr: 23,
    name: 'The Liana',
    description:
      'A very affectionate and intimate position! The man is standing next to the edge of the bed with his legs apart. He is embracing his partner to give her stability. The woman is holding onto him with her arms around his neck. She can place her legs on the bed to support herself so that both can enjoy her backward and forward movements. The eye contact creates an intimate experience.',
    intimacy: 1,
    man: {
      primary: 'M. biceps brachii,M. pectoralis',
      secondary: 'M. quadriceps',
      level: 4
    },
    woman: { primary: 'M. quadriceps', level: 4 }
  },
  {
    nr: 71,
    name: 'The Melting',
    description:
      "Merge with your partner! The man is sitting with his legs bent, enclosing his partner's lower back so that she can let herself drop. She places her stretched out legs on his shoulders while holding on to his upper body. With the strength of his arms he can control the rhythm of penetration.",
    intimacy: 1,
    man: {
      primary: 'M. biceps brachii',
      secondary: 'M. erector spinae',
      level: 4
    },
    woman: { primary: 'M. biceps brachii', level: 4 }
  },
  {
    nr: 59,
    name: 'The Pearl Diver',
    description:
      "Dive in! The man is standing  at the edge of the bed with his upper body slightly bent. He gently lifts his partner's hips. Her hands are on the ground and her lower legs are in between her partner's legs for additional support. Her bent legs support his movements so that a deeper penetration is possible.",
    intimacy: 1,
    man: {
      primary: 'M. biceps brachii',
      secondary: ' M. rectus abdominis,M. erector spinae,M. gluteus',
      level: 4
    },
    woman: {
      primary: 'M. trapezius,M. triceps brachii,M. erector spinae',
      level: 4
    }
  },
  {
    nr: 67,
    name: 'The Desert Flower',
    description:
      'The woman is entirely open! She is lying with her legs bent while the man is in squatting position. He can enclose her thighs and move her pelvis and vary the depth of penetration. He can spoil her with his movements while she leans back and relaxes.',
    intimacy: 1,
    man: {
      primary: 'M. rectus abdominis,M. gluteus',
      secondary: 'M. erector spinae',
      level: 4
    },
    woman: { level: 4 }
  },
  {
    nr: 5,
    name: 'The Lotus Flower',
    description:
      "Enjoy your partner's smooth hips! The man is lying full-lengths on his back while his partner is sitting astride on his pelvis. The lotus position can be challenging for the woman because her legs are crossed and her feet are resting on her thighs. Sitting crossed-legged can be an alternative to that (see figure). The man can use his hands to caress her as desired, while she circulates her pelvis and obliges him to give himself to her.",
    intimacy: 1,
    man: {
      primary: 'M. biceps brachii,M. pectoralis',
      secondary: 'M. triceps brachii',
      level: 4
    },
    woman: { primary: 'M. erector spinae', level: 4 }
  },
  {
    nr: 43,
    name: 'Heaven',
    description:
      "Feels like in heaven! The man is kneeling with open legs. He is holding his partner's bottom, entering her. She is supporting herself with her hands on the bed and her legs spread on either side of him. She can devote herself to pleasure in a half-lying position.",
    intimacy: 1,
    man: {
      primary: 'M. biceps brachii,M. rectus abdominis,M. erector spinae',
      level: 4
    },
    woman: {
      primary: 'M. gluteus,M. ischiocrurale,M. triceps brachii',
      level: 4
    }
  },
  {
    nr: 36,
    name: 'The Parforce Run',
    description:
      "A sensual alternative to the classic cowgirl position! The man is sitting on a chair with his legs closed. His partner encloses his lap with her pelvis astride him. She places her bent legs next to his thighs. If both embrace each others forearms, the man can enjoy his partner's movements.",
    intimacy: 1,
    man: { primary: 'M. biceps brachii', level: 4 },
    woman: { primary: 'M. quadriceps', level: 4 }
  },
  {
    nr: 6,
    name: 'Chocolate',
    description:
      'Oral intercourse in a different way! The woman is lying on her back with her head on the edge of the bed. The man stands above her with slightly bent knees and places her head between his legs. He can hold and support her head as well as control how deep he enters her mouth and how fast she satisfies him. An intensive and stimulating pleasure for both!',
    intimacy: 3,
    man: {
      primary: 'M. quadriceps',
      secondary: 'M. biceps brachii',
      level: 4
    },
    woman: { level: 4 }
  },
  {
    nr: 40,
    name: 'The Equestrienne',
    description:
      "In this position the woman can play with his pleasure! The man's upper back is situated on an elevated base so that his thighs and stomach provide an even seating surface for her. She can sit down on his lap with her legs bent and receive him with her pelvis. In order to keep her balance she can place her hands on his upper body.",
    intimacy: 1,
    man: {
      primary:
        'M. gluteus,M. ischiocrurale,M. rectus abdominis,M. erector spinae',
      level: 4
    },
    woman: { primary: 'M. rectus abdominis,M. erector spinae', level: 4 }
  },
  {
    nr: 56,
    name: 'The Duel',
    description:
      "A duel for loving combatants! Both, the woman and the man, support themselves on one bent leg and one elbow. The woman wraps her other leg around him while he stretches out his other leg and encompasses her bottom with his hand in order to support her movements. She can hold on to his torso. This position requires some practice. Don't give up, it's worth it!",
    intimacy: 1,
    man: {
      primary: 'seitliche Bauchmuskulatur,M. erector spinae',
      secondary: 'M. gluteus',
      level: 4
    },
    woman: {
      primary: 'seitliche Bauchmuskualut,M. erector spinae',
      level: 4
    }
  },
  {
    nr: 1,
    name: 'The Throne',
    description:
      "An unusual position that holds a lot of promise! The man is lying on the floor while his legs are up against the wall. He is holding his partner's bottom to support the movements. It's a very appealing position for the man as he can enjoy the nice view.",
    intimacy: 2,
    man: {
      primary: 'M. triceps brachii',
      secondary: 'M. pectoralis',
      level: 4
    },
    woman: {
      primary: 'M. quadriceps',
      secondary: 'M. gluteus',
      level: 4
    }
  },
  {
    nr: 24,
    name: 'The Rocking Chair',
    description:
      "Sounds complicated, but it's worth it! The man is supporting himself on an armchair with his arms while his bent legs are placed on two chairs. His partner is sitting down with her back facing him. She is giving pleasure to both with her swaying movements. Additionally she can hold on to her partner's legs to keep her balance.",
    intimacy: 1,
    man: {
      primary: 'M. rectus abdominis,M. gluteus',
      secondary: 'M. ischiocrurale',
      level: 4
    },
    woman: {
      primary: 'M. triceps surae,M. quadriceps',
      secondary: 'M. erector spinae',
      level: 4
    }
  },
  {
    nr: 48,
    name: 'The Siren',
    description:
      'Why not do it on one leg? This position is a variant of "the back-up". While the man is leaning against the wall with his legs apart, his partner is facing him with her back, pulling one leg up. She places it on the wall to gain stability. She can also hold on to his hips. This way both can devote themselves to their pleasure.',
    intimacy: 1,
    man: {
      primary: 'M. quadriceps',
      secondary: 'M. biceps brachii',
      level: 4
    },
    woman: { level: 4 }
  },
  {
    nr: 35,
    name: 'The Divining Rod',
    description:
      "Make a wish! The man is sitting on the edge of a chair while his partner places her thighs onto his, bending forward. In a slight hollow back position she is supporting herself with her forearms. The man's hands are free to caress his partner and give her even more pleasure. He can even embrace her hips and support her movements. Just enjoy it!",
    intimacy: 1,
    man: { primary: 'M. erector spinae', level: 4 },
    woman: {
      primary: 'M. rectus abdominis,M. trapezius,M. erector spinae',
      level: 4
    }
  },
  {
    nr: 19,
    name: 'The Lily',
    description:
      'Reach your peak kneeling! While the woman is in all-fours position on the bed, the man can penetrate her slowly or hard from behind and stimulate her G-spot. While the man is enjoying the arousing view he can embrace her pelvis or stimulate her clitoris to increase her pleasure. If she only needs one hand to support herself, she can use the other one to stimulate herself additionally.',
    intimacy: 1,
    man: {
      primary: 'M. gluteus,M. rectus abdominis,M. erector spinae',
      level: 4
    },
    woman: {
      primary: 'M. trapezius,M. triceps brachii,M. pectoralis',
      level: 4
    }
  },
  {
    nr: 16,
    name: 'The Water-Lily',
    description:
      'A little break for the man! In this position the man can devote himself completely to the movements as well as the view of his partner. He is lying on his back with his legs bent while she is sitting down on him with her legs spread enfolding him. She can satisfy him by circling her pelvis or moving backwards and forwards. Both of them have their hands free to caress each other and increase their sexual pleasure.',
    intimacy: 1,
    man: { primary: 'M. deltoideus,M. pectoralis', level: 4 },
    woman: { level: 4 }
  },
  {
    nr: 11,
    name: 'Fusion',
    description:
      "This is a very affectionate position where the partners embrace each other tenderly. The man is in squatting position, enfolding the woman's torso in his arms. The woman is sitting in his lap, holding on to his torso tightly while her feet are on the ground for support. They can devote themselves to pleasure in slow rocking motion.",
    intimacy: 1,
    man: {
      primary: 'M. pectoralis,M. biceps brachii,M. triceps brachii',
      secondary: 'M. quadriceps',
      level: 4
    },
    woman: {
      primary: 'M. quadriceps',
      secondary: 'M. trapezius,M. rhomboideus,M. latissimus dorsi',
      level: 4
    }
  },
  {
    nr: 26,
    name: 'The Back Seat',
    description:
      'A very enjoyable position for the man! The man is lying on his back with bent legs. His partner is sitting down on his open lap. She can enclose his thighs to support herself. Her legs are stretched out and tense so that she can move up and down. The man can support her movements by placing his hands on her waist.',
    intimacy: 1,
    man: {
      primary: 'M. deltoideus,M. pectoralis,M. biceps brachii',
      level: 4
    },
    woman: { primary: 'M. erector spinae', level: 4 }
  },
  {
    nr: 49,
    name: 'The Reconciliation',
    description:
      'An amazing intimate position! The man is kneeling on the ground holding his partners bottom and back. She is standing on one bent leg while the other one is bent only slightly with her tiptoes on the ground. She embraces his shoulders and neck so that she can merge with her partner.',
    intimacy: 1,
    man: {
      primary: 'M. biceps brachii,M. gluteus,M. rectus abdominis',
      level: 4
    },
    woman: { primary: 'M. quadriceps', level: 4 }
  },
  {
    nr: 69,
    name: 'The Legacy',
    description:
      'The 69 position a little different! The woman is curling up on her back so that she can touch the ankles of her stretched out legs. The man is hovering above her with his head above her bottom, supporting himself with his hands on her. In this position they can satisfy each other orally.',
    intimacy: 3,
    man: { primary: 'M. triceps brachii,M. erector spinae', level: 4 },
    woman: { primary: 'M. biceps brachii', level: 4 }
  },
  {
    nr: 28,
    name: 'Gates of Heaven',
    description:
      "Almost heaven! The man is sitting on a chair, holding on to the backrest. His partner is on his lap with her back facing him. Her feet are on the ground so that she can play with his pleasure. While she is circulating and tilting her pelvis, she can support herself with her hands on her partner's stomach.",
    intimacy: 1,
    man: {
      primary: 'M. rectus abdominis',
      secondary: 'M. ischiocrurale',
      level: 4
    },
    woman: { primary: 'M. quadriceps', level: 4 }
  },
  {
    nr: 52,
    name: 'Hide and Seek',
    description:
      'Attention! Oral examination! The woman is lying on a chair with her head down and her legs bent on the backrest. If her partner bends forward and supports himself on the chair, he can satisfy her with oral sex. She can also hold on to his hips and satisfy him orally.',
    intimacy: 3,
    man: {
      primary: 'M. quadriceps',
      secondary: 'M. erector spinae',
      level: 4
    },
    woman: { primary: 'M. erector spinae', level: 4 }
  },
  {
    nr: 57,
    name: 'Vote of Confidence',
    description:
      "She can just let go and fall into his arms! The man is standing with his legs spread holding his partner's lower back. If she trusts her partner's strength, she can slowly lean back and let herself drop back. Once the balance is found, both can enjoy this position.",
    intimacy: 1,
    man: {
      primary: 'M. pectoralis',
      secondary: 'M. quadriceps,M. gluteus,M. rectus abdominis',
      level: 4
    },
    woman: { primary: 'M. rectus abdominis,M. erector spinae', level: 4 }
  },
  {
    nr: 64,
    name: 'The Ski Jump',
    description:
      'Ready for take-off! The man is lying on a chair with stretched out legs. His body is tense so that only his bottom and head are touching the chair. Her back is facing him while he is holding her arms. She can sit on him with her legs bent and lean far forward without falling. She can support herself on his thighs so that she can move up and down on his lap.',
    intimacy: 1,
    man: {
      primary: 'M. biceps brachii',
      secondary: 'M. erector spinae',
      level: 4
    },
    woman: { primary: 'M. quadriceps', level: 4 }
  },
  {
    nr: 21,
    name: 'The Tango',
    description:
      'Show me your hands! While the man is sitting on the edge of a table the woman is facing him with one leg pulled up onto the table. She presses her pelvis tightly against his. Both can use their hands to caress each other and increase their pleasure.',
    intimacy: 1,
    man: { primary: 'M. rectus abdominis', level: 4 },
    woman: { primary: 'M. triceps surae', level: 4 }
  },
  {
    nr: 29,
    name: 'The Sleigh',
    description:
      "This position allows a lot of physical contact! The man is lying on an armchair with his legs stretched out while holding his partner's hands. She is lying on top of him with her feet on his shoulders, facing the ceiling. Even though the penetration can be aggravating, it is certainly worth it!",
    intimacy: 1,
    man: { primary: 'M. trapezius,M. sternocleidomastoideus', level: 4 },
    woman: { level: 4 }
  },
  {
    nr: 72,
    name: 'The Bridge',
    description:
      "The woman can prove her sportiness! The woman arches her back while her partner is kneeling and satisfying her orally. If she can relax and keep this position, she can enjoy her partner's skills.",
    intimacy: 2,
    man: {
      primary: 'M. erector spinae,M. rectus abdominis',
      secondary: 'M. biceps brachii',
      level: 4
    },
    woman: {
      primary: 'M. gluteus,M. ischiocrurale,M. erector spinae',
      secondary: 'M. triceps brachii',
      level: 4
    }
  },
  {
    nr: 34,
    name: 'The Telescope',
    description:
      "Prepare to be amazed by her! The man is sitting on a chair with his legs spread while his partner is sitting down facing him with her feet next to him. In this position they are holding hands in order to maintain the swaying motions of the woman. The woman's pelvis can move freely. This position is very intense and the woman can control depth and rhythm of penetration.",
    intimacy: 1,
    man: { primary: 'M. biceps brachii', level: 4 },
    woman: { primary: 'M. rectus abdominis,M. erector spinae', level: 4 }
  },
  {
    nr: 37,
    name: 'The Ski Jumper',
    description:
      "Buy her some time! The woman is lying on a chair with her legs bent while the man's back is facing her. His legs are bent and he introduces his penis from above. She places her legs on to his back and holds on to his pelvis so that she can feel his pushes and devote herself to pleasure.",
    intimacy: 1,
    man: { primary: 'M. quadriceps,M. erector spinae', level: 4 },
    woman: { primary: 'M. ischiocrurale', level: 4 }
  },
  {
    nr: 65,
    name: 'The Magnet',
    description:
      'In this position the man exerts a pull on his partner! The man is in all-fours position while his partner is holding on to him underneath his arms. This way she can press her pelvis tightly against his. Only her feet are touching the bed, her back is entirely up in the air. If she is strong enough to maintain this position, she can work miracles with her hips.',
    intimacy: 1,
    man: {
      primary: 'M. triceps brachii,M. trapezius',
      secondary: 'M. erector spinae',
      level: 4
    },
    woman: {
      primary: 'M. biceps brachii,M. gluteus',
      secondary: 'M. erector spinae',
      level: 4
    }
  },
  {
    nr: 55,
    name: 'The Desire',
    description:
      'A very intimate position with a lot of physical contact! The woman is lying on her stomach with her head dangling over the edge of the bed. She can place her hands on the ground. Her partner can lie down on top of her and enter from behind while he supports himself on the ground. He can move slowly as well as fast to give her great pleasure.',
    intimacy: 4,
    man: {
      primary: 'M. triceps brachii,M. trapezius,',
      secondary: 'M. gluteus,M. erector spinae',
      level: 4
    },
    woman: { primary: 'M. trapezius,M. triceps brachii', level: 4 }
  },
  {
    nr: 13,
    name: 'The Back-Up',
    description:
      'Enjoy standing up! The man is standing, leaning against the wall with slightly bent legs and his feet close together while the woman is standing with her back to him, pressing her pelvis tightly against his. He can caress the back of her neck and give her amazing pleasure by using his hands.',
    intimacy: 4,
    man: { primary: 'M. quadriceps', level: 4 },
    woman: {
      primary: 'M. gluteus,M. quadriceps,M. ischiocrurale',
      level: 4
    }
  },
  {
    nr: 46,
    name: 'The Secretary',
    description:
      'He is the man! The woman crouches down with spread legs and supports herself with her arms on the backrest. The man is standing and enters her from behind. He can hold on to her pelvis to give her stability and control the rhythm.',
    intimacy: 1,
    man: { primary: 'M. quadriceps,M. gluteus', level: 4 },
    woman: {
      primary: 'M. triceps surae,M. quadriceps,M. erector spinae',
      level: 4
    }
  },
  {
    nr: 54,
    name: 'Rock Climbing',
    description:
      'Swing baby! The man is leaning against the wall, stabilizing his partner by holding her feet. She can wrap her arms around his neck and give him pleasure by moving her pelvis.',
    intimacy: 1,
    man: {
      primary: 'M. trapezius,M. rhomboideus,M. levator scapulae',
      secondary: 'M. quadriceps',
      level: 4
    },
    woman: {
      primary: 'M. trapezius,M. rhomboideus,M. levator scapulae',
      secondary: 'M. gluteus,M. rectus abdominis',
      level: 4
    }
  },
  {
    nr: 2,
    name: 'The Carriage',
    description:
      "If you like it from behind, you will take this challenge with pleasure! The woman supports herself with her arms on an elevated base while the man is holding her thighs and pelvis, entering her from behind. Even though her legs are enclosing the man's hips and she can control his movements, she has to give herself completely. Depending on the strength of both, this position can allow a wide range of movement so that it becomes a sensual experience.",
    intimacy: 1,
    man: {
      primary: 'M. quadriceps,M. gluteus',
      secondary: 'M. biceps brachii,M. rectus abdominis',
      level: 4
    },
    woman: {
      primary: 'M. rectus abdominis,M. pectoralis',
      secondary: 'M. triceps brachii',
      level: 4
    }
  },
  {
    nr: 17,
    name: 'The Gondolier',
    description:
      "A position that promises great pleasure for both! In this position the woman is lying and supporting herself with her forearms on a tall base, such as an exercise ball. The man is kneeling on the ground and holding his partner's bottom tightly while entering her from the front. The woman encloses his pelvis with her legs so that she can control the rhythm of penetration. However the man dominates the sexual pleasure by rocking pelvis movements.",
    intimacy: 1,
    man: {
      primary: 'M. biceps brachii',
      secondary: 'M. erector spinae',
      level: 4
    },
    woman: { primary: 'M. ischiocrurale', level: 4 }
  },
  {
    nr: 7,
    name: 'Down Under',
    description:
      'In this position the woman can let go completely! The woman is headfirst, supporting herself with her underarms on the ground. Her partner encompasses her pelvis. He is standing with his legs apart, enclosing her from behind while she wraps her legs around his pelvis. He can decide how deep and strong he enters her. However, this position does require some practice.',
    intimacy: 1,
    man: {
      primary: 'M. quadriceps,M. gluteus,M. rectus abdominis',
      secondary: 'M. biceps brachii',
      level: 4
    },
    woman: {
      primary: 'M. trapezius',
      secondary: 'M. pectoralis',
      level: 4
    }
  },
  {
    nr: 18,
    name: 'The Love Clip',
    description:
      "Pure intimacy! The woman is lying on her back, supporting herself with her underarms. She encloses her partner's hips with her legs. He is lying on top of her with his pelvis lifted in order to press her pelvis tightly against his. They can look each other in the eyes and drift into rhythmic movements.",
    intimacy: 1,
    man: {
      primary: 'M. rectus abdominis,M. triceps brachii,M. erector spinae',
      secondary: 'M. gluteus',
      level: 4
    },
    woman: { primary: 'M. trapezius,M. rectus abdominis', level: 4 }
  },
  {
    nr: 63,
    name: 'The Sun Worshipper',
    description:
      "In this position you don't only worship the sun but also your partner! The man is sitting between his bent legs, holding his partner's waist. Her legs are stretched out on his shoulders. She is supporting herself on her hands so that she can gently sway back and forth. In this position both can influence the depth and rhythm of penetration. Also, you can look your partner in the eyes.",
    intimacy: 1,
    man: {
      primary: 'M. deltoideus,M. pectoralis,M. biceps brachii',
      secondary: 'M. erector spinae',
      level: 4
    },
    woman: { primary: 'M. erector spinae', level: 4 }
  },
  {
    nr: 20,
    name: 'The Rainbow',
    description:
      "For aficionados! The man is lying on the bed with his torso lifted. His partner is lying on top of him with her legs stretched out and her back facing him. She can control the rhythm while she supports herself on the bed. The man has the possibility to influence the depth and rhythm of penetration by enclosing his partner's pelvis and moving it backwards and forwards.",
    intimacy: 1,
    man: {
      primary: 'M. rectus abdominis',
      secondary: 'M. pectoralis,M. trapezius',
      level: 4
    },
    woman: {
      primary: 'M. trapezius,M. triceps brachii,M. pectoralis',
      level: 4
    }
  },
  {
    nr: 44,
    name: 'The Ballerina',
    description:
      'The classic from behind even more sensual! The woman is in all-fours position. Her partner places one of her legs on his thigh. He embraces her hips so that he can enter her. Rhythmic back and forth motions will give her absolute pleasure!',
    intimacy: 1,
    man: {
      primary: 'M. rectus abdominis,M. gluteus',
      secondary: 'M. biceps brachii',
      level: 4
    },
    woman: {
      primary: 'M. ischiocrurale',
      secondary: 'M. triceps brachii',
      level: 4
    }
  },
  {
    nr: 9,
    name: 'Desktop',
    description:
      'A lovely view! The man either sits on a chair or the edge of a bed and holds the upper body of his partner who is sitting on top of him, facing him. He can please her by moving forwards and backwards while enjoying the view of her breasts.',
    intimacy: 1,
    man: {
      primary:
        'M. biceps brachii,M. trapezius,M. rhomboideus,M. levator scapole',
      level: 4
    },
    woman: {
      primary: 'M. rectus abdominis,M. trapezius,M. sternocleidomastoideus',
      level: 4
    }
  },
  {
    nr: 38,
    name: 'The Biker',
    description:
      'Unwind! This position is similar to "The rainbow". The man is sitting on his bent knees while his partner is lying on his lap with her back facing him. Her legs are stretched out and she is supporting herself with her hands on the bed so that she can curve into a hollow back position and control her pelvis movements. Her partner moves up and down and can spoil her with her free hands.',
    intimacy: 1,
    man: {
      primary: 'M. erector spinae,M. rectus abdominis',
      secondary: 'M. biceps brachii',
      level: 4
    },
    woman: { primary: 'M. triceps brachii', level: 4 }
  },
  {
    nr: 4,
    name: 'The Carpenter',
    description:
      'A very intense pleasure for both! The woman is sitting on a table with her hands placed on the edge of it. The man places her lower legs on his shoulders, holds her hips and enters her. He is in complete control of the depth and rhythm of penetration. He can spoil her while she devotes herself to him.',
    intimacy: 1,
    man: {
      primary: 'M. quadriceps',
      secondary: 'M. biceps brachii,M. triceps brachii,M. pectoralis',
      level: 4
    },
    woman: {
      primary: 'M. triceps brachii,M. deltoideus,M. infraspinatus',
      level: 4
    }
  },
  {
    nr: 12,
    name: 'Leg Scissors',
    description:
      "Not for weak lovers! The man is holding the woman's bottom while she is carefully letting herself drop forward. With her thighs twined around his waist tightly, she can support herself with her hands and enjoy the forward and backward motions of her partner.",
    intimacy: 1,
    man: {
      primary: 'M. rectus abdominis',
      secondary: 'M. quadriceps,M. biceps brachii',
      level: 4
    },
    woman: {
      primary: 'M. trapezius,M. deltoideus',
      secondary: 'M. triceps brachii',
      level: 4
    }
  },
  {
    nr: 47,
    name: 'The Wheel Barrow',
    description:
      'Keep it complicated! The woman is in all-fours position. The man raises her pelvis from behind while he is standing between her legs. He can introduce his penis from behind if he embraces her pelvis so that both can enjoy the swaying movements.',
    intimacy: 1,
    man: {
      primary: 'M. quadriceps,M. erector spinae',
      secondary: 'M. biceps brachii',
      level: 4
    },
    woman: {
      primary: 'M. ischiocrurale,M. gluteus,M. triceps brachii,M. trapezius',
      level: 4
    }
  },
  {
    nr: 32,
    name: 'The Sprinter',
    description:
      'A position for sports fans! While the woman bends forward with a wide lunge and supports herself on her forearms, her partner enters her from behind. He can gently move her pelvis back and forth. This way she can receive him even deeper.',
    intimacy: 1,
    man: { primary: 'M. rectus abdominis,M. gluteus', level: 4 },
    woman: { level: 4 }
  },
  {
    nr: 10,
    name: "The Cat's Arched Back",
    description:
      'If you want to try something new you should give this a try! The woman is facing her partner. She is standing on her tiptoes arching her back like a cat. She can place her hands on the ground if it is possible. Her partner can enter her deeply from behind.',
    intimacy: 1,
    man: {
      primary: 'M. erector spinae,M. rectus abdominis',
      secondary: 'M. quadriceps',
      level: 4
    },
    woman: {
      primary: 'M. triceps surae',
      secondary: 'M. trapezius,M. deltoideus,M. pectoralis',
      level: 4
    }
  },
  {
    nr: 61,
    name: 'Entwined',
    description:
      'Intimate while standing! The man is standing while his partner is twining herself around him. She is wrapping her arms around his neck and her legs around his waist so that she can press her pelvis against him. When the man encloses her thighs, he can move her bottom back and forth and control the depth and rhythm of the fusion.',
    intimacy: 1,
    man: {
      primary: 'M. biceps brachii,M. quadriceps',
      secondary: 'M. erector spinae,M. rectus abdominis',
      level: 4
    },
    woman: {
      primary: 'M. biceps brachii',
      secondary: 'M. adductor',
      level: 4
    }
  },
  {
    nr: 15,
    name: 'The Dance of the Dragonfly',
    description:
      'The classic from behind: almost lying! With her legs on a chair the woman is supporting herself with her forearms on the ground. The man is lying half on top of her and enters her gently with his legs spread. Being the receiver the woman is enjoying the pushing movements of her partner.',
    intimacy: 1,
    man: {
      primary:
        'M. triceps brachii,M. latissimus dorsi,M. trapezius,M. pectoralis',
      secondary: 'M. erector spinae',
      level: 4
    },
    woman: { primary: 'M. pectoralis,M. trapezius', level: 4 }
  },
  {
    nr: 27,
    name: 'The Compass',
    description:
      "Look! Here the woman has to give proof of her flexibility. The man makes a side lunge standing by the edge of the bed. He is holding his partner's pelvis sideways. Her back is facing him. She has one leg between his legs that she places on the bed and the other one is stretched out along his upper body. She supports herself with one hand on the ground while her other hand is enclosing his hand so that her chest is open. This way the man can enter her sideways and rock her pelvis backwards and forwards.",
    intimacy: 1,
    man: {
      primary: 'M. quadriceps',
      secondary: 'M. biceps brachii',
      level: 4
    },
    woman: {
      primary:
        'M. trapezius,M. triceps brachii,M. levator scapulae,M. rhomboideus',
      level: 4
    }
  },
  {
    nr: 62,
    name: 'The Pleasure',
    description:
      'She can show him how she loves him! The man places his upper body on a chair, bending his legs. His partner can stretch out one leg along his chest and sit down on his lap. She can support herself with her hands on his thighs. His pelvis is up in the air which allows her a wide range of movement. This way she can show him what she loves.',
    intimacy: 1,
    man: {
      primary: 'M. gluteus',
      secondary: 'M. ischiocrurale,M. erector spinae',
      level: 4
    },
    woman: {
      primary: 'M. triceps brachii',
      secondary: 'M. erector spinae',
      level: 4
    }
  },
  {
    nr: 58,
    name: 'Treasure Island',
    description:
      'For women who enjoy! The woman is lying on her back with her bottom at the edge of the bed. Her partner places his legs next to her, facing downward, so that he can enter her from above. His hands are on the ground for support. The woman can be in a comfortable position by placing her lower legs on his back while he takes the active role.',
    intimacy: 1,
    man: {
      primary: 'M. trapezius,M. triceps brachii',
      secondary: 'M. erector spinae,M. rectus abdominis',
      level: 4
    },
    woman: { level: 4 }
  },
  {
    nr: 51,
    name: 'Rodeo',
    description:
      'This position allows an even deeper penetration! While the woman is supporting herself with her underarms on a chair, the man is standing with his legs spread between her legs. He encloses her pelvis and lifts it. In this position he can enter from behind by swaying her pelvis back and forth.',
    intimacy: 1,
    man: {
      primary: 'M. biceps brachii,M. deltoideus',
      secondary: 'M. quadriceps,M. gluteus,M. rectus abdominis',
      level: 4
    },
    woman: {
      primary: 'M. trapezius,M. erector spinae',
      secondary: 'M. gluteus,M. ischiocrurale',
      level: 4
    }
  },
  {
    nr: 33,
    name: 'The Sample',
    description:
      "The other way round! The man is leaning against the wall, embracing his partner's stomach with both arms. She is bent forward with her shoulders on his thighs. The man has to have a lot of strength in order to hold her. She can also enclose him with her arms. In this position he can satisfy his partner with oral sex. Once she feels comfortable in this position she can open up to him completely.",
    intimacy: 2,
    man: {
      primary: 'M. biceps brachii,M. quadriceps',
      secondary: 'M. pectoralis',
      level: 4
    },
    woman: { primary: 'M. ischiocrurale', level: 4 }
  },
  {
    nr: 30,
    name: 'The Fountain',
    description:
      'Why not try it sideways? In this position the man is lying on his back. If required, he can place his torso and legs on an elevated base so that his partner can move her legs the way she wants. She is sitting on him sideways, supporting herself with her arms on him. She can use the base for her legs so that she can move her pelvis the way she wants. He can caress her with his hands to increase her pleasure.',
    intimacy: 1,
    man: { primary: 'M. gluteus,M. ischiocrurale', level: 4 },
    woman: {
      primary: 'M. quadriceps,M. ischiocrurale',
      secondary: 'M. triceps surae',
      level: 4
    }
  },
  {
    nr: 25,
    name: 'The Seat of Honor',
    description:
      "This position requires the man's strength! He is in all-fours position with his face turned towards the ceiling. His partner is sitting down on his lap backwards, supporting herself with her hands on his thighs. She can place her feet between his legs, move up and down and circulate or tilt her pelvis. It allows her a wide range of movement so that she can enhance pleasure for both of them.",
    intimacy: 1,
    man: {
      primary:
        'M. triceps brachii,M. trapezius,M. latissimus dorsi,M. gluteus,M. erector spinae',
      level: 4
    },
    woman: {
      primary: 'M. triceps surae,M. quadriceps',
      secondary: 'M. triceps brachii',
      level: 4
    }
  },
  {
    nr: 8,
    name: 'The Executive Chair',
    description:
      'The Cowgirl position in a different way! For someone who likes the cowgirl position but still wants to try something new, "the executive chair" is a good choice. The man is lying on his back with his legs bent, enclosing his partner\'s waist. She receives him while she is sitting astride him. As her hands are free, she can caress his testicles or touch herself. But be careful, this position requires balance!',
    intimacy: 1,
    man: { primary: 'M. triceps brachii', level: 4 },
    woman: {
      primary: 'M. quadriceps',
      secondary: 'M. ischiocrurale',
      level: 4
    }
  },
  {
    nr: 68,
    name: 'The Radio Mast',
    description:
      "A reckless seduction! The man is standing with his legs bent, leaning forward above his partner. He is holding her pelvis so that her body is up in the air. Only her head is touching the ground. The best bet is to have a soft base. She can hold on to his calves and press her stretched out legs against him. She has to trust her partner's strength and leave everything to him.",
    intimacy: 1,
    man: {
      primary: 'M. quadriceps,M. biceps brachii',
      secondary: 'M. erector spinae',
      level: 4
    },
    woman: {
      primary: 'M. erector spinae',
      secondary: 'M. biceps brachii',
      level: 4
    }
  },
  {
    nr: 31,
    name: 'Saddle-Fast',
    description:
      'A tender ride! The man is sitting with his knees bent embracing the woman. She is sitting astride him with her legs bent. She supports herself by placing her hands on his thighs. He can caress her with his free hands while she moves her pelvis back and forth or tilts it up and down.',
    intimacy: 2,
    man: { primary: 'M. erector spinae', level: 4 },
    woman: { primary: 'M. quadriceps', level: 4 }
  },
  {
    nr: 70,
    name: 'The Grasshopper',
    description:
      'The man can prove his sportiness! The woman is lying on her back on a soft base, placing her stretched out legs towards her head. Her partner enters her from above. He supports himself with his feet behind her head and his forearms on a chair.',
    intimacy: 1,
    man: {
      primary: 'M. erector spinae,M. gluteus',
      secondary: 'M. rectus abdominis',
      level: 4
    },
    woman: { primary: 'M. rectus abdominis', level: 4 }
  },
  {
    nr: 53,
    name: 'The Swimming Instructor',
    description:
      'Woman under tension! Her upper body is situated on an exercise ball. She is supporting herself on her forearms while her partner is standing behind her, lifting her legs in order to enter her. She can support his movements by enclosing his waist with her legs. The woman needs a huge amount of body tension in order to keep her balance.',
    intimacy: 1,
    man: {
      primary: 'M. biceps brachii',
      secondary: 'M. gluteus,M. erector spinae',
      level: 4
    },
    woman: {
      primary: 'M. abductor,M. ischiocrurale',
      secondary: 'M. gluteus',
      level: 4
    }
  },
  {
    nr: 66,
    name: 'Route 69',
    description:
      'Who is mouthing off here? The man is standing and holding his partner headfirst. She is holding on to his lower back. She can wrap her legs around his neck for support. In this position they can satisfy each other orally.',
    intimacy: 3,
    man: {
      primary: 'M. erector spinae,M. trapezius,M. biceps brachii',
      level: 4
    },
    woman: { primary: 'M. biceps brachii', level: 4 }
  },
  {
    nr: 22,
    name: 'Luging',
    description:
      "A sensual pleasure for both! The man is lying on his back. His partner crouches down, facing him and holding on to his bent legs. This position allows a wide range of movement where they can stimulate each other. For additional pleasure the man's hands could be tied.",
    intimacy: 1,
    man: {
      primary: 'M. ischiocrurale',
      secondary: 'M. adductor',
      level: 4
    },
    woman: { primary: 'M. triceps brachii,M. quadriceps', level: 4 }
  },
  {
    nr: 50,
    name: 'The Half Split',
    description:
      'Half-standing, half sideways! The woman supports herself on her arms while the man is standing at the edge of the bed. He takes one of her legs and places it onto his torso, holding it with one arm. Her other leg is bent so that she can support herself on the bed. This way she is in a sideway position where her partner can enter very deep.',
    intimacy: 1,
    man: {
      primary: 'M. gluteus,M. rectus abdominis',
      secondary: 'M. quadriceps',
      level: 4
    },
    woman: {
      primary: 'M. gluteus,M. ischiocrurale,seitliche Bauchmuskulatur',
      level: 4
    }
  },
  {
    nr: 60,
    name: 'The View',
    description:
      "It's going to get hot! The woman is lying on an elevated base, such as an exercise ball. The man is standing between her legs, slightly lifting her thighs so that he can enter her from the front. He can blow her mind with his rhythmic motions. This is a rather temporary position since it demands very strong arms.",
    intimacy: 1,
    man: {
      primary: 'M. quadriceps,M. biceps brachii',
      secondary: 'M. gluteus,M. rectus abdominis,M. erector spinae',
      level: 4
    },
    woman: { primary: 'M. erector spinae', level: 4 }
  },
  {
    nr: 41,
    name: 'The South Pole',
    description:
      'Find the right balance between tension and relaxation! The woman is satisfied in the same way as the man in the position "The North Pole". The woman is doing a handstand against the wall with her legs apart so that her partner can satisfy her with his mouth. He can hold her pelvis to give her stability.',
    intimacy: 2,
    man: {
      primary: 'M. quadriceps',
      secondary: 'M. rectus abdominis',
      level: 4
    },
    woman: {
      primary: 'M. triceps brachii,M. latissimus,M. deltoideus,M. pectoralis',
      level: 4
    }
  },
  {
    nr: 39,
    name: 'The Tiara',
    description:
      'Her trust is put to the proof! The man is standing with his legs apart while the woman embraces his neck. Her legs are bent and he is holding her feet. She can move her pelvis back and forth or receive him by moving up and down. It is the most intensive experience once you make yourself comfortable.',
    intimacy: 1,
    man: {
      primary:
        'M. triceps brachii,M. trapezius,M. rhomboideus,M. levator scapulae',
      secondary: 'M. quadriceps,M. erector spinae,M. sternocleidomastoideus',
      level: 4
    },
    woman: {
      primary: 'M. trapezius,M. levator scapulae,M. rhomboideus',
      level: 4
    }
  },
  {
    nr: 42,
    name: 'The Pleasure Trap',
    description:
      "Once you try it, you'll never get away from it! The woman is lying on her back while the man is on top of her in the opposite direction. He is supporting himself on his forearms introducing his penis from above. She encloses his hips with her legs in order to press her pelvis against his. She can use her free hands to caress him.",
    intimacy: 2,
    man: { primary: 'M. rectus abdominis,M. erector spinae', level: 4 },
    woman: { level: 4 }
  },
  {
    nr: 14,
    name: 'Hang Time',
    description:
      "A little elaborate but it's worthwhile! The woman is lying on her shoulders on a tall base, such as an exercise ball, while the man is holding her bottom in order to support her. Additionally she can put her feet on a table and enclose his legs to keep her balance. With slightly bent legs he can control the depth and rhythm of penetration. In this position the woman has to devote herself completely to her partner.",
    intimacy: 1,
    man: {
      primary: 'M. quadriceps,M. deltoideus,M. pectoralis',
      secondary: 'M. erector spinae',
      level: 4
    },
    woman: {
      primary: 'M. trapezius',
      secondary: 'M. erector spinae',
      level: 4
    }
  }
];

export default positions;
