#!/usr/bin/env python3

# Copyright (c) 2018 Anki, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License in the file LICENSE.txt or at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Hello World

Make Vector say 'Hello {yourname}' in this simple Vector SDK example program.
"""

import sys,getopt, anki_vector


def main():

    try:
        opts, args = getopt.getopt(sys.argv[1:], "s:i:a:c:")
    except getopt.GetoptError as err:
        # print help information and exit:
        print(err) # will print something like "option -a not recognized"
        usage()
        sys.exit(2)
    name = None
    serial = None
    config = None
    ip=None
    for o, a in opts:
        if o == "-s":
            serial = a.strip()
        elif o == "-a":
            name = a.strip()
        elif o == '-c':
            config  = {"cert": a.strip()}
        elif o == '-i':
            ip = a.strip()
        else:
            assert False, "unhandled option"
            
    with anki_vector.Robot(serial = serial, config = config, ip=ip) as robot:
        print("Say " + name)
        robot.behavior.say_text(name)


if __name__ == "__main__":
    main()
