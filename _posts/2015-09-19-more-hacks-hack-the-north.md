---
layout: post
title:  "More Hacks at Hack the North CTF Two"
date:   2015-09-19 03:00:00
header: "/images/blog/20150919/ctf-header.png"
preview: "/images/blog/20150919/ctf-preview.png"
permalink: log/more-hacks-hack-the-north-ctf-two/
show_toc: true
tags:
- hack the north
- ctf
description: In which we go on a scavenger hunt of puzzles across the internet.
---

We the lurkers of the Hack the North #random Slack channel were once again in the midst of another CTF on September 12th, a mere four days after the first one fell. With 10 winning spots on the line, people from far and wide came out for the final challenge.

<div class="padaround">
    <blockquote class="twitter-tweet" lang="en" align="center"><p lang="en" dir="ltr">Hey Hackers! Try out CTF Challenge 2 in the <a href="https://twitter.com/hashtag/random?src=hash">#random</a> channel on Slack! The first 10 to complete it will win a special prize!</p>&mdash; Hack the North (@HackTheNorth) <a href="https://twitter.com/HackTheNorth/status/642826275565010944">September 12, 2015</a></blockquote>
</div>

<em>First time here? Don't forget to check out my <a href="/log/literally-hacking-hack-the-north-ctf/">log post on the first Hack the North CTF</a>!</em>

A few days earlier, one of Hack the North's organizers put out a poll on how hard the next CTF should be. A majority voted for a CTF easier than the first one, though an option to break 4096-bit RSA did come close to winning.

<figure>
    <img src="/images/blog/20150919/democracy.png" width="300px" />
    <figcaption>Technically, it's <a href="http://phys.org/news/2013-12-trio-rsa-encryption-keys-noise.html">possible to break 4096-bit RSA</a>.</figcaption>
</figure>

The CTF's admins promised that their new CTF would be more straightforward than the last one, and encouraged us to work together instead of asking them privately for hints. This lead to a more collaborative CTF, and the #random channel was alive with discussion about the clues people found. This post outlines my experiences during the CTF.

<em>I was actually late to the party, only starting the CTF on Sunday at 1am EDT since it was the <a href="https://uwaterloo.ca/quest/undergraduate-students/important-dates/important-dates-2015-2016">weekend before classes at Waterloo</a>. I had a lot of help and hints available by then. :P</em>

<div class="alert alert-danger" role="alert"><strong>Caution!</strong> The IPs and other data shown here were working properly at the time of the CTF. This may no longer be the case by the time you read this. You have been warned.</div>

## The Aftermath of CTF One

The CTF begins with a pastebin message from `wscott`, the North Bank's Chief Security Officer (CSO). In it, we see a picture of the North Bank after the devastating results of the first Hack the North CTF. The company's reputation has gone down the drain and they have gone on lockdown to secure as much as they can. The CSO has unwittingly contacted us to help track down the hacker responsible for this and bring him to justice. He helpfully provides us with his username and password to the bank's Employee Portal.

<figure>
    <img src="/images/blog/20150919/ctf2-start.png" width="500px" />
    <figcaption>We do what we must because we can.</figcaption>
</figure>

From the first CTF, we know that we were hired by a mysterious hacker named J, who (in the story) tricks us into hacking the North Bank for him. We can therefore investigate the scene of the crime to look for clues he may have left.

## These Aren't the Files You're Looking For

After logging into the Employee Portal, we are greeted with a message that the site's functionality has been locked down. This can be confirmed by modifying the page's `accesslevel` cookie: nothing happens even when we change the integer in it. As usual, there is a link to the webmaster's personal site.

<figure>
    <img src="/images/blog/20150919/gradients.png" width="250px" />
    <figcaption>MY EYES</figcaption>
</figure>

Clicking on the essay link brings us to a long nonsensical essay on *"The Weatherization of Journalists"*. Scanning through this page, there appears to be nothing of use, and the length and randomness of the text implies that what we're looking for isn't here. Going back to the webmaster's filesystem at `/~dglenn/private/` also gives us nothing of use.

Going back to the essay page, we can analyze the source code to see if there's anything interesting there. Another quick scan through reveals something interesting: the webmaster's password is embedded in the page as a comment.

<figure>
    <img src="/images/blog/20150919/password-comment.png" width="500px" />
    <figcaption>Security through obscurity FTW!</figcaption>
</figure>

We can use this password to login to the webmaster's account, which has a list of username and password combos in plaintext, including the CEO's. We can then login to the CEO's account, where we can download a ZIP file. Inside this ZIP file is the following image of [HAL 9000](https://en.wikipedia.org/wiki/HAL_9000) from [*2001, A Space Odyssey*](https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(film)).

<figure>
    <img src="/images/blog/20150919/hal.png" width="200px" />
    <figcaption>I'm afraid I can't let you do that.</figcaption>
</figure>

At some point,  the people at #random decided to open the image in a text editor. Inside was some sort of hash that started with `FBMD` -- it was assumed that it was to be used in another part of the CTF, but it turned out that it was just a tag automatically added to Facebook photos. Undeterred, the ZIP file itself was opened in a text editor, which yielded much more interesting results:

<figure>
    <img src="/images/blog/20150919/zip-clue.png" width="300px" />
    <figcaption>This is what the NSA means when they talk about "metadata".</figcaption>
</figure>

We have three fields given to us: `Username`, `Time`,  and `Other`. The CTF admins revealed that the value for `Time` is just a reference for when the first CTF was beaten for the first time, so the only fields we're concerned about are `Username` and `Other`. The tag added to the HAL 9000 file turned out to be a clue for what to do with the `Other` value -- it's actually the ID for our [mystery hacker's Facebook profile](https://www.facebook.com/profile.php?id=100010276120209)!

<figure>
    <img src="/images/blog/20150919/j-facebook.png" width="250px" />
    <figcaption>You probably shouldn't make a Facebook profile if you're on the run.</figcaption>
</figure>

Poking around J's Facebook profile, we can find additional puzzles to help us uncover his identity. The next two sections will look into these puzzles.

## Bogocompress

If we go to J's Work and Education info, we can find that there's an entry called "IF I AM Arrested". Under this is a message giving us links to two files -- `file.fc` and `fc-slow.py`.

<figure>
    <img src="/images/blog/20150919/j-hint.png" width="300px" />
    <figcaption>TIL Massachusetts is in Quebec.</figcaption>
</figure>

When we open `file.fc`, we get a gigantic block of gibberish:

<figure>
    <img src="/images/blog/20150919/mumbo-jumbo.png" width="300px" />
    <figcaption>The numbers Mason, what do they mean???</figcaption>
</figure>

In `fc-slow.py` we get an explanation of what the files are used for: the Python3 file contains the North Bank CSO's fast compress algorithm. The script uses the [NumPy library](http://www.numpy.org/), so someone in #random recommended that we install [Anaconda](http://continuum.io/downloads) (which contains NumPy) in order to run the script. Even then, we cannot run the script due to runtime errors, so it looks like we'll need to further investigate what it does.

The Python interpreter complains about the following line in `fc_slow.py`, which can be found inside a function called `s_decompress` with an input parameter `x`:

{% highlight python %}
head, body, foot = x.split('\n')
{% endhighlight %}

The interpreter says that there are `too many values to unpack`. Upon investigation, we find out that the contents of `file.fc` are read and converted into a list by splitting the file at every newline. This list is then passed to `s_decompress`, where it fails at the above line. When we look at `file.fc`, we find that there is an extra newline at the very end of the file. This means that when the file is split, it results in a list containing four elements, instead of the three that `x.split('\n')` expects. There are two solutions to fix this: we can either simply remove the extra newline from `file.fc`, or we can add another variable after `foot` in the above line.

That's not all however. Even though we can finally execute the script, it seems that it immediately gets stuck in an infinite loop. We will therefore have to go through the script and fix anything that is implemented weirdly. This turned out to be the most frustrating part of the CTF. Everyone at #random ended up working together to overcome it.

For reference, the script works as follows. The following functions exist: `matmul` (matrix multiplication), `matdiv` (matrix division), `s_compress` (the fast compress implementation), `s_decompress` (the fast decompress implementation), `r_sort` (a non-destructive sort function), `s_encrypt` (encrypts passed in plaintext), `s_decrypt` (decryptes passed in encrypted text) and `s_securehash` (the securehash implementation discussed in [the first CTF post](/log/literally-hacking-hack-the-north-ctf/#puzzle-2-dont-make-your-own-hash)). We can add print statements to each function to figure out where the script is getting stuck.

The compression process works as follows. The program reads a plaintext file and encrypts it using `s_encrypt`. It then takes this encrypted string and compresses it using `s_compress`, which uses some random process to compress the data. It then creates a new file called `file.fc` that contains the compressed data as well as the information needed to decompress it. The decompression process works in reverse: `s_decompress` decompresses the target file then `s_decrypt` decrypts the resulting encrypted text. Both `s_compress` and `s_decompress` use `matmul`, `matdiv`, `r_sort` and `s_securehash` in some way in their process.

Someone first pointed out the `r_sort` function, which has the following implementation:

{% highlight python %}
def r_sort(lst):
    """Return a clone of the list in sorted order."""
    clone = lst[:]

    while True:
        try:
            random.shuffle(clone)
            for i in range(len(clone)):
                for j in range(len(clone)):
                    if j > i and clone[j] < clone[i]:
                        raise NotSortedException()
        except:
            pass
        else:
            return clone
{% endhighlight %}

It is immediately obvious that this is a variation of our favourite sorting algorithm -- [bogosort](https://en.wikipedia.org/wiki/Bogosort)! What bogosort does is it randomly shuffles the contents of a list until it gets a permutation where the list is sorted. Normally, bogosort has a best-case efficiency of O(n), but one of the CTF admins pointed out that this implementation is O(n<sup>2</sup>) due to the two nested for loops it uses to check if the list is sorted.

Based on the comments for this function, we can replace the implementation with the following:

{% highlight python %}
def r_sort(lst):
    """Return a clone of the list in sorted order."""
    clone = lst[:]
    return sorted(clone)
{% endhighlight %}

This returns a sorted version of the parameter `lst` without destroying the original `lst` variable.

The second function mentioned in the channel was `matdiv`, which is used for matrix division operations in compressing or decompressing a file. The original implementation is as follows.

{% highlight python %}
def matdiv(c, b):
    dim = len(b), len(b[0])
    maxv = 0
    while True:
        maxv += 1
        for i in range(maxv ** 2 * dim[0] * dim[1] + 10):
            cand = [
                [random.randint(0, maxv) for _ in range(dim[0])]
                for _ in range(dim[1])
                ]
            if matmul(cand, b) == c:
                return cand
{% endhighlight %}

As you can see, simply generating random numbers and checking to see if the matrix you found is a valid answer isn't a good way to math. Fortunately, the script uses the NumPy library, so we can use that to our advantage. Our initial implementation was the following:

{% highlight python %}
def matdiv(c, b):
    return numpy.divide(c, b)
{% endhighlight %}

Despite this, we were still seeing weird errors in the functions calling `matdiv`. Thinking that these functions were also defective, we spent a considerable amount of time stepping through them and investigating the file input to see what was defective. It turns out that our fix for `matdiv` is invalid -- a CTF admin pointed out that `numpy.divide()` actually does an *element-wise division* (meaning that it simply divides each element in the matrix with another integer) instead of doing actual matrix division. Someone in the channel suggested to take advantage of the following matrix property instead:

<figure>
    <div class="equation">
    <p>A · B = C</p>
    <p>A = C · B<sup>-1</sup></p>
    </div>
    <figcaption>Equation 1: Using matrix inverses for matrix division.</figcaption>
</figure>

We can therefore change our `matdiv` implementation to the following:

{% highlight python %}
def matdiv(c, b):
    return numpy.rint(numpy.dot(c, numpy.linalg.inv(b)))
{% endhighlight %}

We call on `numpy.rint()` since `numpy.dot()` returns a matrix with floats. In our case, we're using the results of `matdiv` as indices to a list, so we want the results as integers instead.

With this implementation, we find that `matdiv` is finally working properly, and we can move on to the next function.

Since there appears to be a common theme of bogo-esque functions screwing up the script, we can focus our search for functions that exhibit this behaviour. We don't have to look for long -- we find that `s_decrypt` employs a bogo-esque technique:

{% highlight python %}
def s_decrypt(encrypted, key):
    """Decrypt a STRONGENCRYPTed string."""
    plaintext = []

    while encrypted != s_encrypt("".join(plaintext), key):
        plaintext = []

        for i, c in enumerate(encrypted):
            if i % 2 == 0:
                continue  # even numbers are just ABC, irrelevant to encryption
            k = key[i // 2 % len(key)]
            possibilities = []
            try:
                possibilities.append(chr(ord(k) - ord(c)))
            except:
                pass
            try:
                possibilities.append(chr(ord(k) + ord(c)))
            except:
                pass
            try:
                possibilities.append(c)
            except:
                pass
            plaintext.append(random.choice(possibilities))

    return "".join(plaintext)
{% endhighlight %}

This is an intimidating function at first glance. It tries to break the encrypted string by going through each character and generating a list of possibilities from it. It then randomizes this until it gets the correct original plaintext.

My initial implementation to fix this was to remove the randomization process and force the function to go through all possibilities and look for the original plaintext. This would result in an extremely inefficient function that will take a while to go through all permutations. The people who finished this part of the CTF hinted that the script was supposed to run instantaneously, and recommended that I try to reverse the initial encryption process. Once we take a look at `s_encrypt`, we see:

{% highlight python %}
def s_encrypt(plaintext, key):
    """Use the STRONGENCRYPT algorithm to encrypt the plaintext."""
    encrypted_plaintext = []
    for i, c in enumerate(plaintext):
        e = key[i % len(key)]
        if ord(c) < ord(e) - 32:
            encrypted_plaintext.append('A')  # type A encryption
            encrypted_plaintext.append(chr(ord(e) - ord(c)))
        elif ord(e) < ord(c) - 32:
            encrypted_plaintext.append('B')  # type B encryption
            encrypted_plaintext.append(chr(ord(c) - ord(e)))
        else:
            encrypted_plaintext.append('C')  # type C encryption
            encrypted_plaintext.append(c)

    return "".join(encrypted_plaintext)
{% endhighlight %}

*Facepalm*. This isn't hard to break -- what it does is that it goes through each character of the plaintext and decides to use one of three possible "encryption" methods. For each character position, there is a possible key character that can be used to "encrypt" the character by subtracting the key character from the plaintext character in some manner (this is done by converting the characters to their ASCII number first, subtracting, then converting back into a character). Since the key is provided to us, we can easily reverse this "encryption" with some simple math:

{% highlight python %}
def s_decrypt(encrypted, key):
    print("I'm in decrypt!")
    """Decrypt a STRONGENCRYPTed string."""
    plaintext = []

    for i in range(len(encrypted) // 2):
        e = key[i % len(key)]
        if encrypted[i*2] == 'A':
            plaintext.append(chr(ord(e) - ord(encrypted[i*2+1])))
        elif encrypted[i*2] == 'B':
            plaintext.append(chr(ord(e) + ord(encrypted[i*2+1])))
        elif encrypted[i*2] == 'C':
            plaintext.append(encrypted[i*2+1])

    return "".join(plaintext)
{% endhighlight %}

With no other bogo-esque functions in the script, we can now try decrypting `file.fc`. The script finishes instantly, which is a good sign. Opening the decrypted file, we get this message from J:

<figure>
    <img src="/images/blog/20150919/j-message.png" width="400px" />
    <figcaption>And I would've gotten away with it too, if it weren't for those meddling kids!</figcaption>
</figure>

Wow. Fortunately, J is nice enough to give us a link to report him to the police. Opening this link, we get a simple page asking for J's key, which consists of 9 capital letters. We don't have much else to work with right now, so we'll go back to this at a later section.

<figure>
    <img src="/images/blog/20150919/report.png" width="300px" />
    <figcaption>Truly a modern Moriarty, that J.</figcaption>
</figure>

## Hidden in Plain Sight

Once we go back to J's Facebook profile, we can find a challenge posted on his wall:

<figure>
    <img src="/images/blog/20150919/j-challenge.png" width="400px" />
    <figcaption>Pictured: what not to do if you're a sysadmin.</figcaption>
</figure>

It's an IP to J's server! Someone in the channel ran a scan against it and found that the server only had its SSH ports open. We can guess that J's username is (of course) `J`, but what about the password? One potential clue is that J has apparently been on the move all over the world:

<figure>
    <img src="/images/blog/20150919/j-move.png" width="300px" />
    <figcaption>Funny thing is that someone in Waterloo co-op could move as many times as J within a year.</figcaption>
</figure>

Each "Moved" life event on Facebook has a coordinate attached to it. The locations are scattered all over the world, from the streets of Seattle, WA to the rural fields of Austria. There are 10 move events in total, so it probably doesn't correspond to the police-reporting password from before. One of the coordinates is actually repeated twice, which could be something interesting.

Everyone at the #random channel pored over the coordinates for hours: plotting them on maps, grabbing their street addresses or even adding the coordinates together. None of them turned up anything useful. Eventually, I made a sarcastic joke on the channel:

<figure>
    <img src="/images/blog/20150919/sarcasm.png" width="400px" />
    <figcaption>The CTF admins weren't responding since they were just waiting for us at a random street in Seattle.</figcaption>
</figure>

To my surprise, someone replied a few minutes later that they got into the server and found some files. Wut? I decided to double check one of the coordinates on Google Maps to see what was up.

<figure>
    <img src="/images/blog/20150919/gmaps-before.png" width="500px" />
    <figcaption>If J is staying at a Krankenhauskapelle, does "J" actually stand for "Jean Valjean"?</figcaption>
</figure>

Out of curiosity, I switched over to Earth view and found this:

<figure>
    <img src="/images/blog/20150919/gmaps-after.png" width="500px" />
    <figcaption>The P stands for <a href="https://en.wikipedia.org/wiki/Pareidolia">Pareidolia</a>.</figcaption>
</figure>

The coordinate is actually smack dab in the middle of a building shaped like a `P`! If we go through the coordinates on J's Facebook profile in order, we can find that each is centered on a building shaped like some letter or number. Once we do that, we get a string that turns out to be the password to J's server!

I immediately informed the #random channel about this and moved on to the next step of the CTF.

## Should've Paid Attention in Lin Alg

Once we login to J's server, we can find four files: `instructions.txt`, `ciphertext`, `psk` and `grid1to26`. The instructions file gives us the following information:

* The secret key is contained somewhere in the files.
* The grid in `grid1to26` must be decrypted to get this key, but the key to decrypt the grid isn't anywhere.
* "`Z = (1,1) and Q = (26,1)`"
* The grid's absolute origin is at `(x,y) = (8,15)`
* The key's [basis](https://en.wikipedia.org/wiki/Basis_(linear_algebra)) is `[(3,1),(-2,1)]`
* Nine (!) vectors given in the [standard basis](https://en.wikipedia.org/wiki/Standard_basis): `(2,1),(2,3),(4,6),(0,-2),(0,-1),(5,7),(4,8),(5,2),(2,-3)`

`ciphertext` contained the string `ZEBRVJWBMQHOIVWNUTKNOGGWPQ` (not unique letters, but it has a length of 26), `psk` contained a list of 26 integers counting from 1 to 26 and `grid1to26` contained a 26-by-26 grid of uppercase letters ([available on GitHub](https://github.com/lloydtorres/hackthenorth-ctf/blob/master/ctf2/grid1to26)).

I recognized that this stage would involve [changing the basis](https://en.wikipedia.org/wiki/Change_of_basis), which I actually [learned last term in MATH 215](/log/surviving-waterloo-ece-2a-term/#math-215---linear-algebra). Unfortunately, I had completely forgotten about the process to do that after going through four months of co-op. Oops.

At this point, I wasn't sure how to go forward so I decided to step back for a bit and take care of some errands (this was during the weekend before classes at Waterloo after all). While waiting for a bus somewhere in Waterloo, I checked Slack to see how everyone was doing and saw that the CTF had already been beaten. Damn! [@coruon](https://twitter.com/coruon), who was part of the team who first beat the first CTF, was once again the first to beat this CTF. He was followed by Ryan H., who was the third person to finish the first CTF (after us).

<figure>
    <blockquote class="twitter-tweet" lang="en" align="center"><p lang="en" dir="ltr">Congrats to <a href="https://twitter.com/coruon">@coruon</a> for winning CTF#2 in 19 hours 46 minutes and 19 seconds! Still 9 more chances to win a prize!</p>&mdash; Hack the North (@HackTheNorth) <a href="https://twitter.com/HackTheNorth/status/643128782694555648">September 13, 2015</a></blockquote>
    <blockquote class="twitter-tweet" lang="en" align="center"><p lang="en" dir="ltr">A second challenger, Ryan Huang, has completed CTF #2 in 22 hours 34 minutes 6 seconds. 8 more chances to win a prize!</p>&mdash; Hack the North (@HackTheNorth) <a href="https://twitter.com/HackTheNorth/status/643178568265166849">September 13, 2015</a></blockquote>
</figure>

Fortunately, there were still seven other spots to get! The two winners gave some hints: to decrypt the grid, we would have to reorder some parts of it, the end goal of decrypting was to make the the first row of the grid equal `ciphertext`, and that the change of basis instructions was not related to decrypting the grid.

Looking at `ciphertext`, we can see that it has 26 letters, which matches the size of the grid. At first glance at the grid, it seems that setting `ciphertext` as the first row is impossible: for example, the first letter in `ciphertext`, `Z`, simply did not exist anywhere near its supposed position. I even tried doing some mapping -- since `psk` was made up of a list of 26 unique integers from 1 to 26, I thought that a [Caesar cypher mapping](https://en.wikipedia.org/wiki/Caesar_cipher) (i.e. each letter is replaced by a corresponding one) was being used to encrypt the grid (unfortunately, this did not produce anything).

Looking closely at the letters in the grid revealed something interesting: the first column where a `Z` appears is the third column. This seems to correspond to the first integer in `psk`: 3. This pattern continued to repeat for each letter in `ciphertext` and each number in `psk`. That's when I realized it: the columns in `grid1to26` will have to be ordered as specified in `psk`. To actually create `ciphertext` in the first row, we will have to shift the letter in each column, much like one would with a dial.

I quickly wrote a script to test this idea. The script is [available on GitHub](https://github.com/lloydtorres/hackthenorth-ctf/blob/master/ctf2/decypher.py) -- in its current form, the script can actually solve the entire puzzle, but at the time it only produced the reordered and shifted grid, and I continued the rest of my idea by testing manually.

Assuming that the top-left is (1, 1) (as specified in the instructions), we can set the absolute origin to be at (8, 15). From there, we can treat the grid as a normal Cartesian plane, where the origin is (0, 0) and where the x- and y- axes intersect. This is shown in the following diagram.

<figure>
    <img src="/images/blog/20150919/coordinate-system.png" width="400px" />
    <figcaption>Word Search: Extreme Edition</figcaption>
</figure>

From here, we can start with the change of basis process. It's been a while since I actually did this, so I had forgotten how to actually change a coordinate from one basis to another. Fortunately, @coruon posted [this helpful guide](https://www.math.hmc.edu/calculus/tutorials/changebasis/) in changing the basis. Even then, I still messed up the process -- fortunately, a CTF admin was there to guide me through the math (thank you!).

Since we're changing the basis from the standard basis to our target basis, we can simply use the following equation:

<figure>
    <div class="equation">
    <p>[v]<sub>B</sub> = P · [v]</p>
    </div>
    <figcaption>Equation 2: Given a basis B, we can turn that into a transformation matrix P (made up of the basis B's vectors) and multiply the vector [v] to get its equivalent [v]<sub>B</sub> in the basis B.</figcaption>
</figure>

Using Microsoft Math (I apparently no longer had access to Matlab on the university computers), I went through each vector given in the instructions and multiplied them with the transformation matrix to get the actual vector. Given each vector, I went through the decrypted grid and came up with their corresponding letters.

<figure>
    <img src="/images/blog/20150919/manual.jpg" width="300px" />
    <figcaption>As helpfully shown here.</figcaption>
</figure>

Once we convert each basis-changed vector into their corresponding letters, we get a string of nine uppercase letters. We can copy-paste this into the police reporting page from before, after which we finally defeat CTF Two. Victory!

## Final Victory

I ended up being the third person to beat the CTF, about an hour and a half after Ryan H.

<figure>
    <blockquote class="twitter-tweet" lang="en" align="center"><p lang="en" dir="ltr">Third person to finish <a href="https://twitter.com/HackTheNorth">@HackTheNorth</a> <a href="https://twitter.com/hashtag/CTF?src=hash">#CTF</a> II just before dinner! Thanks to everyone who helped. c: <a href="https://twitter.com/hashtag/hacking?src=hash">#hacking</a></p>&mdash; Lloyd Torres (@ImperatorTorres) <a href="https://twitter.com/ImperatorTorres/status/643186962283675648">September 13, 2015</a></blockquote>
</figure>

Over the next few days, the other winners and I ended up helping out anyone else still working on the CTF by giving out hints and even helping them out on technical issues. All 10 spots were finally taken on September 17th, five days after CTF Two's launch and just a day before the start of Hack the North.

<figure>
    <blockquote class="twitter-tweet" lang="en" align="center"><p lang="en" dir="ltr">Presenting... the winners of CTF #2! <a href="https://twitter.com/hashtag/crackthenorth?src=hash">#crackthenorth</a> <a href="http://t.co/FdwEV478Uo">pic.twitter.com/FdwEV478Uo</a></p>&mdash; Hack the North (@HackTheNorth) <a href="https://twitter.com/HackTheNorth/status/644634634240794624">September 17, 2015</a></blockquote>
</figure>

I honestly had a lot of fun with this CTF! It was great working with everyone in solving each puzzle, and it was a great refresher for the start of the school term.

The top winners were promised [black forest cake](http://theportalwiki.com/wiki/Cake) at Hack the North, but it turned out that [the cake is a lie](http://knowyourmeme.com/memes/the-cake-is-a-lie). We did get a plush of Waterloo's favourite mascot: the Canada goose.

<figure>
    <img src="/images/blog/20150919/goose.jpg" width="300px" />
    <figcaption>HISS</figcaption>
</figure>

Once again, thank you so much to the CTF admins for making such a fun puzzle on short notice, and for being there 24/7 to help us out with issues. You guys are awesome!

I'd also like to thank everyone who played along with the CTF, and worked with everyone to solve each puzzle. Good luck at Hack the North!

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>